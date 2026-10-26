# ![树莓派Logo](./RPlogo.svg)

近期购入一台 4U8G 的树莓派5，用于搭建一个 Home Assistant 的容器环境，以及搭建一个 NAS 系统。我想通过这篇文章记录下整个过程。这其中用到了 docker等相关技术，我会记录下这个过程。方便日后查阅。

## 前期准备

- 树莓派5（4U8G）
- 64G 的 SD 卡（读卡器）
- 树莓派HDMI线
- 一根短网线
- 一台电脑
- WI-FI环境

## 树莓派自动发送 IP 地址到邮箱

配置树莓派在连接 WiFi 时，自动获取其内网和公网 IP，并通过 Postfix 邮件服务发送到指定邮箱。

### 准备工作

1. **安装必要工具**
   - 安装 `mailutils` 和 `postfix`：

     ```bash
     sudo apt update
     sudo apt install mailutils postfix -y
     ```

   - 在 Postfix 配置中选择 **Internet Site**，并设置系统主机名为树莓派的主机名，例如 `dg-pi`。

2. **配置 Postfix**
   按照以下步骤配置 Postfix 使用 QQ 邮箱的 SMTP 中继：
   - 编辑 `/etc/postfix/main.cf`：

```bash
sudo nano /etc/postfix/main.cf
```

添加以下内容：

```txt
relayhost = [smtp.qq.com]:587
smtp_sasl_auth_enable = yes
smtp_sasl_password_maps = hash:/etc/postfix/sasl_passwd
smtp_sasl_security_options = noanonymous
smtp_use_tls = yes
smtp_tls_CAfile = /etc/ssl/certs/ca-certificates.crt
```

- 创建 `/etc/postfix/sasl_passwd` 文件：

```bash
sudo nano /etc/postfix/sasl_passwd
```

内容如下：

```txt
[smtp.qq.com]:587 247328581@qq.com:your_smtp_authorization_code
```

替换 `your_smtp_authorization_code` 为您的 QQ 邮箱授权码。

- 更新配置并设置权限：

```bash
sudo postmap /etc/postfix/sasl_passwd
sudo chmod 600 /etc/postfix/sasl_passwd /etc/postfix/sasl_passwd.db
sudo systemctl restart postfix
```

3. **验证邮件发送功能**
   测试 Postfix 是否能够发送邮件：

```bash
echo "Test Email" | mail -s "Test Subject" 247328581@qq.com
```

### 自动发送 IP 脚本

创建一个脚本，在树莓派连接 WiFi 时获取 IP 并发送到邮箱。  

 1.创建脚本文件
创建 /usr/local/bin/send_ip.sh 文件：

```bash
sudo nano /usr/local/bin/send_ip.sh
```

内容如下：

```bash
#!/bin/bash

# 获取内网 IP
INTERNAL_IP=$(hostname -I | awk '{print $1}')
# 获取公网 IP
EXTERNAL_IP=$(curl -s https://api64.ipify.org)

# 邮件内容
SUBJECT="树莓派已连接 WiFi"
MESSAGE="树莓派当前的 IP 地址：\n内网 IP：$INTERNAL_IP\n公网 IP：$EXTERNAL_IP"

# 调试日志
echo "Internal IP: $INTERNAL_IP" >> /tmp/send_ip_debug.log
echo "External IP: $EXTERNAL_IP" >> /tmp/send_ip_debug.log

# 发送邮件
echo -e "$MESSAGE" | mail -s "$SUBJECT" 247328581@qq.com

# 检查邮件发送状态
if [ $? -eq 0 ]; then
    echo "Mail sent successfully" >> /tmp/send_ip_debug.log
else
    echo "Mail failed to send" >> /tmp/send_ip_debug.log
fi
```

2.设置脚本权限

```bash
sudo chmod +x /usr/local/bin/send_ip.sh
```

3.测试脚本
手动运行脚本验证功能：

```bash
sudo /usr/local/bin/send_ip.sh
```

检查 /tmp/send_ip_debug.log 或目标邮箱确认是否收到邮件。

### 配置自动运行

使用 systemd 配置树莓派连接 WiFi 后自动运行脚本。
 1.创建 systemd 服务文件
创建 /etc/systemd/system/send_ip.service 文件：

```bash
sudo nano /etc/systemd/system/send_ip.service
```

内容如下：

```txt
[Unit]
Description=Send Raspberry Pi IP Address
After=network-online.target

[Service]
ExecStart=/usr/local/bin/send_ip.sh
Type=oneshot

[Install]
WantedBy=multi-user.target
```

2.启用服务

```bash
sudo systemctl enable send_ip.service
```

3.手动启动服务测试
运行以下命令检查脚本是否正常运行：

```bash
sudo systemctl start send_ip.service
sudo systemctl status send_ip.service
```

4.重启设备验证  
重启树莓派：

```bash
sudo reboot
```

检查邮箱是否收到 IP 地址邮件。

## 树莓派通过 Postfix 使用 QQ 邮箱发送邮件

本文记录在树莓派上配置 Postfix 通过 QQ 邮箱 SMTP 中继发送邮件的过程，并解决 SPF 验证失败和配置重复的问题。

---

### 问题描述

1. **SPF 验证失败**
   错误信息：`550 SPF check failed`
  邮件服务器拒绝了发件人地址。

2. **Postfix 配置重复**
错误信息：`overriding earlier entry: relayhost=[smtp.qq.com]:587`  

配置文件中多次定义了 `relayhost`。

---

### 解决方案

#### 1. 配置 Postfix 使用 QQ 邮箱的 SMTP 服务

1. **编辑配置文件**
打开 `/etc/postfix/main.cf`：

```bash
sudo nano /etc/postfix/main.cf
```

添加以下内容：

```txt
relayhost = [smtp.qq.com]:587
smtp_sasl_auth_enable = yes
smtp_sasl_password_maps = hash:/etc/postfix/sasl_passwd
smtp_sasl_security_options = noanonymous
smtp_use_tls = yes
smtp_tls_CAfile = /etc/ssl/certs/ca-certificates.crt
```

2.设置 SMTP 验证

创建 /etc/postfix/sasl_passwd 文件：

```bash
sudo nano /etc/postfix/sasl_passwd
```

内容如下：

```txt
[smtp.qq.com]:587 247328581@qq.com:your_smtp_authorization_code
# 将 your_smtp_authorization_code 替换为 QQ 邮箱的授权码。
```

3.更新配置并设置权限

```bash
sudo postmap /etc/postfix/sasl_passwd
sudo chmod 600 /etc/postfix/sasl_passwd /etc/postfix/sasl_passwd.db
```

4.重启 Postfix

```bash
sudo systemctl restart postfix
```

5.验证配置
执行以下命令检查配置是否正确：

```bash
sudo postfix check
```

6.重启 Postfix 服务

```bash
sudo systemctl restart postfix
```

::: danger 注意事项
  确保 `/etc/postfix/sasl_passwd` 和 `/etc/postfix/sasl_passwd.db` 权限正确：

  ```bash
  sudo chmod 600 /etc/postfix/sasl_passwd /etc/postfix/sasl_passwd.db
  ```

:::

## 树莓派安装docker

## 安装HomeAssistant镜像

## 家庭模型、智能家居位置处理、灯光图渲染

## ps 制作灯光电器控制图

## 调测HA代码与控制图匹配制作

## 修改HomeAssistant皮肤管理
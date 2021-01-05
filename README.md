# ufop server

## Create service file

```bash
vi /lib/systemd/system/ufopServer.service
```

```ini
[Unit]
Description=ufop server
After=docker.service
Conflicts=shutdown.target reboot.target halt.target

[Service]
Restart=always
RestartSec=10
WorkingDirectory=/root/ufopServer
ExecStart=/usr/local/bin/docker-compose up
ExecStop=/usr/local/bin/docker-compose down
LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity
TimeoutStartSec=10
TimeoutStopSec=30
StartLimitBurst=3
StartLimitInterval=60s
NotifyAccess=all

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable ufopServer
sudo systemctl start ufopServer
```

## Docker

```bash
# Create network for ufopParser and usrInfo
docker network create ufopServer
```

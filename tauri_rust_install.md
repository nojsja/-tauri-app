# Ubuntu21.04 安装 rust 并初始化 tauri 项目流程

## 准备环境

```bash
sudo apt update
sudo apt install libgtk-3-dev libcairo2-dev libjpeg-dev libgif-dev libsoup2.4 libwebkit2gtk-4.0-dev libglib2.0-dev libgtk-3-dev build-essential wget curl libappindicator3-dev patchelf librsvg2-dev
```

## 设置 rust 安装源

```bash
export RUSTUP_DIST_SERVER=https://mirrors.sjtug.sjtu.edu.cn/rust-static
export RUSTUP_UPDATE_ROOT=https://mirrors.sjtug.sjtu.edu.cn/rust-static/rustup
```

## 下载并执行 rust 安装脚本

```bash
curl https://sh.rustup.rs -sSf | sh
source $HOME/.cargo/env
```

## 设置 cargo 软件源

vim ~/.cargo/config
在打开的config文件中写入：

```toml
[source.crates-io]
registry = "https://github.com/rust-lang/crates.io-index"
replace-with = 'ustc'
[source.ustc]
registry = "git://mirrors.ustc.edu.cn/crates.io-index"
```

## linux 设置终端 http 代理

> 遇到网络报错的地方可以尝试设置代理，前提是本机有代理软件开启了http代理服务

```bash
export HTTP_PROXY=http://127.0.0.1:<port>
export HTTPS_PROXY=http://127.0.0.1:<port>
```

## 安装全局的 tauri-cli

```bash
npm i -g cnpm
cnpm i -g @tauri-apps/cli
cnpm i -g create-tauri-app
```

## 初始化 tauri 项目

```bash
create-tauri-app
```

## 进入 tauri 项目安装依赖

```bash
yarn install
```

## 开启前端服务和 tauri 服务

```bash
yarn dev
tauri dev
```


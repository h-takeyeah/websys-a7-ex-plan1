@echo off
@rem http serverを起動
pushd "%~dp0"

npx http-server
echo CTRL+C to exit.

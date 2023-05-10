#!/bin/bash

# Actualizar el gestor de paquetes
sudo apt-get update

# Instalar Angular CLI
sudo npm install -g @angular/cli

# Instalar dependencias
sudo apt-get install -y libcairo2-dev libjpeg-dev libgif-dev

# Verificar la versión de Angular CLI
ng version
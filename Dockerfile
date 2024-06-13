# Use a imagem oficial do Node.js como base
FROM node:18-alpine AS build

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o package.json e o package-lock.json (se existir)
COPY package.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos da aplicação para o diretório de trabalho
COPY . .

# Executa o build da aplicação
RUN npm run build

# Usa uma imagem leve do Nginx para servir os arquivos estáticos
FROM nginx:alpine

# Copia a configuração personalizada do Nginx
COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos construídos para o diretório do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe a porta na qual o Nginx está rodando
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]

# Movie and series' catalogue (Front-end)

This project was done for the MVP from the sprint of **Advanced Back-end Development** as part of the Full Stack Development. This app is responsible for searching for movies and series and adding them on a catalogue. It is possible to rate them and it is also possible to check informations from their production. The OMDb API provides the content from the audiovisuals. The present documentation focuses on aspects of the front-end development.

This is a Single Page Application (SPA) composed by 2 main entities:
1. Home: search for movies or series and rate them;
2. Audiovisual: show information about the movie or series.

This app was developed using React and its scaffolding is made through `create vite@latest`.

___
## App visualization

In order to view this app in the browser, the following steps must be done:

1. Install a JavaSript's execution environment, such as `Node.js`: https://nodejs.org/pt/download/package-manager;

2. Execute the following command in the folder `.movies-and-series-catalogue` inside the project in order to install all its dependencies:

```
npm install
```

3. Execute the following command to run the application in development mode:
```
npm start
```

The Home page will be available at http://localhost:5173/


___
## Principais dependências adicionais utilizadas
Além das próprias dependências disponibilizadas no build, a aplicação constantemente recorre a:

* react-router-dom (versão >= 6.24.0): realiza o roteamento dentro da SPA, permitindo ainda a troca de informação entre as entidades;
* @mui/material (versão >= 5.12.20): disponibiliza componentes;
* @mui/icons-material (versão >= 5.12.20): disponibiliza ícones customizáveis.

___
## Fluxo de dados no roteamento
É importante destacar que as informações visualizadas ao executar a aplicação não estão geradas a partir de um servidor de dados. São oriundas de um mock pelo arquivo `atletas.json`. Logo, as adições e alterações feitas não são persistidas.

A comunicação entre as entidades da SPA ocorre seguindo o seguinte fluxo:

<p align="center"> Home ↔ Esportista ↔ Treino </>

* A página Home sempre carrega todo o conteúdo de `atletas.json` e renderiza apenas o nome dos esportistas;
* O roteamento Home → Esportista leva somente os dados filtrados do esportista específico com os treinos associados;
* A página Esportista renderiza os dados do esportista e a descrição dos treinos associados;
* O roteamento Esportista → Treino leva os mesmos dados do roteamento Home → Esportista;
* A página Treino renderiza somente os dados do treino específico;
* O roteamento Treino → Esporista retorna todos os dados do roteamento Esportista → Treino;
* O roteamento Esportista → Home não realiza fluxo de dados do JSON.

___
## Run with Docker

Before proceeding, it is important to have Docker installed.

### Build the image
Open the terminal in `.movies-and-series-catalogue`. The `Dockerfile` is there.
Execute the following command:

```
docker build . -t movies-and-series-catalogue-front-end
```

If everything succeds, an image named `movies-and-series-catalogue-front-end` will be created. To check it, run the following in the same terminal:

```
docker images
````

A similar response should be seen in a good scenario:
```
REPOSITORY                              TAG       IMAGE ID       CREATED          SIZE
movies-and-series-catalogue-front-end   latest    6c89d491d22a   25 minutes ago   676MB
```

#### Details of the image
This image provides a virtualized environment with all the dependencies from the `requirements.txt` and `node:18-alpine`.

### Run a container from the image
Now, execute the following to create a container from the image:

```
docker run --name msc-front-end -dp 3000:3000 movies-and-series-catalogue-front-end
```

It creates a container named msc-front-end, which binds the port 3000 of the container to the port 3000 of the host.

Whenever it is necessary to stop the container, do the following command:

```
docker stop msc-front-end
```

Now, there is no need to create again another container. To run the same one, just do:

```
docker start msc-front-end
```

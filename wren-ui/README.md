This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Start wren-ui from source code

Step 1. Make sure your node version is 18
```bash
node -v
```

Step 2. Install dependencies:

```bash
yarn 
```

Step 3(Optional). Switching database

Wren-ui uses SQLite as our default database. To use Postgres as the database of wren-ui, you need to set the two environment variable below.

```bash
# windows
SET DB_TYPE=pg
SET PG_URL=postgres://user:password@localhost:5432/dbname 

# linux or mac
export DB_TYPE=pg
export PG_URL=postgres://user:password@localhost:5432/dbname
```
-  `PG_URL` is the connection string of your postgres database.

To switch back to using SQLite, you can reassign the `DB_TYPE` to `sqlite`.
```
# windows
SET DB_TYPE=sqlite
SET SQLITE_FILE={your_sqlite_file_path} # default is ./db.sqlite3

# linux or mac
export DB_TYPE=sqlite
export SQLITE_FILE={your_sqlite_file_path}
```

Step 4. Run migrations:

```bash
yarn migrate
# or
npm run migrate
```


Step 5. Run the development server:

```bash
# Execute this if you start wren-engine and ibis-server via docker
# Linux or MacOS
export OTHER_SERVICE_USING_DOCKER=true
export EXPERIMENTAL_ENGINE_RUST_VERSION=false # set to true if you want to use the experimental Rust version of the Wren Engine
# Windows
SET OTHER_SERVICE_USING_DOCKER=true
SET EXPERIMENTAL_ENGINE_RUST_VERSION=false # set to true if you want to use the experimental Rust version of the Wren Engine

# Run the development server
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Development wren-ui module on local
There are many modules in StyleMetrics AI, to develop wren-ui, you can start other modules(services) via docker-compose.
In the [Start wren-ui from source code](#Start-wren-ui-from-source-code) section, you've know how to start wren-ui from the source code to develop.
To start other modules via docker-compose, you can follow the steps below.

Step 1. Prepare your docker-compose.yaml and .env files
In the WrenAI/docker folder, you need to copy the example files to create your working files.

```bash
# assume current directory is wren-ui
cd ../docker

# Copy example.docker-compose.yaml to docker-compose.yaml
# Note: docker-compose.yaml is in .gitignore, so you need to create it from the example
cp example.docker-compose.yaml docker-compose.yaml

# Copy example.env to .env (or create your own .env file)
cp example.env .env
```

Step 2. Modify your .env file
You need to fill the required environment variables in your `.env` file before starting:

- `OPENAI_API_KEY` - Your OpenAI API key (required)
- `GEMINI_API_KEY` - Your Gemini API key (optional, if using Gemini)
- `USER_UUID` - A UUID v4 for user identification
- `POSTHOG_API_KEY` - PostHog API key (optional, for telemetry)
- `POSTHOG_HOST` - PostHog host URL (optional, for telemetry)

You can also change the version variables (`WREN_ENGINE_VERSION`, `WREN_AI_SERVICE_VERSION`, `IBIS_SERVER_VERSION`, etc.) to the versions you want to use.

Step 3. Prepare config.yaml
Make sure you have a `config.yaml` file in the `docker/` directory. You can copy from `example.config.yaml`:

```bash
# current directory is WrenAI/docker
cp example.config.yaml config.yaml
```

Then edit `config.yaml` to configure your LLM provider and other settings.

Step 4. Start the services via docker-compose
```bash
# current directory is WrenAI/docker
# Make sure docker-compose.yaml exists (copied from example.docker-compose.yaml)
docker compose up --build

# you can add a -d flag to run the services in the background
docker compose up --build -d
# then stop the services via
docker compose down
```

Step 5. Start wren-ui from source code
Refer to [Start wren-ui from source code](#Start-wren-ui-from-source-code) section to start wren-ui from source code.

Step 6. (Optional) Develop other modules along with wren-ui

As mentioned above, you can use docker-compose to start other modules. The same applies when developing other modules.
From the perspective of wren-ui, if you want to develop other modules at the same time, you can stop the container then spin up the module from the source code.

eg: If you want to develop ai-service module, you can stop the ai-service container then start the ai-service from the source code.

To do this, edit your `docker/docker-compose.yaml` file and comment out the service you want to develop locally:

```yaml
# docker/docker-compose.yaml
# Comment out the wren-ai-service service to develop it locally
# wren-ai-service:
#   image: ghcr.io/canner/wren-ai-service:${WREN_AI_SERVICE_VERSION}
#   ...
```

Then refer to the README.md or CONTRIBUTING.md file of the module for starting the module from the source code. 

eg: refer to the [ai-service README](https://github.com/Canner/WrenAI/blob/main/wren-ai-service/README.md#start-the-service-for-development) to start the ai-service from the source code.



## FAQ
### Can I have multiple project at the same time in StyleMetrics AI?
We currently do not support multiple projects in StyleMetrics AI. You can only have one project at a time.
But there is a workaround for this. Since Wren Engine is stateless and we store your semantic model in the database(Sqlite or Postgres), 
you can switch between projects by switching the database and make sure you deploying after server started.

> Tip: Define the `DB_TYPE` and `SQLITE_FILE` or `PG_URL` variable to specify which database you intend to use.

eg: 
```bash
# start your first project using default database(sqlite by defulat)
yarn migrate
yarn dev

# ... after onboarding and lots of hard work, you want to switch to another project 
# stop the server

# set another sqlite file
export SQLITE_FILE=./new_project.sqlite
yarn migrate
yarn dev

# In the Browser, ... after another onboarding process and hard work
# you can switch back to the first project by setting the first sqlite file
export SQLITE_FILE=./first_project.sqlite

yarn dev  # no need to do migration again

# in the modeling page, click the deploy button to deploy the project to the wren-ai-service.
# your StyleMetrics AI is ready to answer your question.
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
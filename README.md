
<p align="center" id="top">
  <a href="https://getwren.ai/?utm_source=github&utm_medium=title&utm_campaign=readme">
    <picture>
      <source media="(prefers-color-scheme: light)" srcset="./misc/wrenai_logo.png">
      <img src="./misc/wrenai_logo_white.png" width="300px">
    </picture>
    <h1 align="center">Wren AI - Open-Source GenBI Agent</h1>
  </a>
</p>

<p align="center">
  <a aria-label="Follow us on X" href="https://x.com/getwrenai">
    <img alt="" src="https://img.shields.io/badge/-@getwrenai-blue?style=for-the-badge&logo=x&logoColor=white&labelColor=gray&logoWidth=20">
  </a>
  <a aria-label="Releases" href="https://github.com/canner/WrenAI/releases">
    <img alt="" src="https://img.shields.io/github/v/release/canner/WrenAI?logo=github&label=GitHub%20Release&color=blue&style=for-the-badge">
  </a>
  <a aria-label="License" href="https://github.com/Canner/WrenAI/blob/main/LICENSE">
    <img alt="" src="https://img.shields.io/github/license/canner/WrenAI?color=blue&style=for-the-badge">
  </a>
  <a href="https://docs.getwren.ai">
    <img src="https://img.shields.io/badge/docs-online-brightgreen?style=for-the-badge" alt="Docs">
  </a>
  <a aria-label="Join the community on GitHub" href="https://discord.gg/5DvshJqG8Z">
    <img alt="" src="https://img.shields.io/badge/-JOIN%20THE%20COMMUNITY-blue?style=for-the-badge&logo=discord&logoColor=white&labelColor=grey&logoWidth=20">
  </a>
  <a aria-label="Canner" href="https://cannerdata.com/?utm_source=github&utm_medium=badge&utm_campaign=readme">
    <img src="https://img.shields.io/badge/%F0%9F%A7%A1-Made%20by%20Canner-blue?style=for-the-badge">
  </a>
</p>

<p align="center">
  <a href="https://trendshift.io/repositories/9263" target="_blank"><img src="https://trendshift.io/api/badge/repositories/9263" alt="Canner%2FWrenAI | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
</p>

> ⚡ GenBI (Generative BI) queries any database in natural language, generates accurate SQL (Text-to-SQL), charts (Text-to-Chart), and AI-powered business intelligence in seconds. ️

<p align="center">
  <img width="1920" height="1080" alt="1" src="https://github.com/user-attachments/assets/bba9d37a-33e3-49ab-b7cb-32fd6dddc8d1" />
</p>
 
## 😍 Demos

https://github.com/user-attachments/assets/f9c1cb34-5a95-4580-8890-ec9644da4160

[Watch GenBI Demo](https://github.com/user-attachments/assets/90ad1d35-bb1e-490b-9676-b29863ff090b)

## 🤖 Features

|                    | What you get | Why it matters |
|--------------------|--------------|----------------|
| **Talk to Your Data** | Ask in any language → precise SQL & answers | Slash the SQL learning curve﻿ |
| **GenBI Insights** | AI-written summaries, charts & reports | Decision-ready context in one click﻿ |
| **Semantic Layer** | MDL models encode schema, metrics, joins | Keeps LLM outputs accurate & governed﻿ |
| **Embed via API**  | Generate queries & charts inside your apps ([API Docs](https://wrenai.readme.io/reference/cloud-getting-started)) | Build custom agents, SaaS features, chatbots﻿ ([Streamlit Live Demo](https://huggingface.co/spaces/getWrenAI/wrenai-cloud-api-demo)) |

🤩 [Learn more about GenBI](https://getwren.ai/genbi?utm_source=github&utm_medium=content&utm_campaign=readme)

## 🚀 Getting Started

Using Wren AI is super simple, you can set it up within 3 minutes, and start to interact with your data!

<p align="center">
  <img width="1920" height="1080" alt="2" src="https://github.com/user-attachments/assets/6555f539-9ef2-485d-9135-0071741fda96" />
</p>

- Visit our [Install in your local environment](http://docs.getwren.ai/oss/installation?utm_source=github&utm_medium=content&utm_campaign=readme).
- Visit the [Usage Guides](https://docs.getwren.ai/oss/guide/connect/overview?utm_source=github&utm_medium=content&utm_campaign=readme) to learn more about how to use Wren AI.
- Or just start with [Wren AI Cloud](https://getwren.ai/?utm_source=github&utm_medium=content&utm_campaign=readme) our Managed Cloud Service. ([OSS vs. Commercial Plans](https://docs.getwren.ai/oss/overview/cloud_vs_self_host)).

## 🐳 Quick Start with Docker

The fastest way to get Wren AI up and running is using Docker Compose. Follow these simple steps:

### Prerequisites

- Docker and Docker Compose installed
- OpenAI API key (or another supported LLM provider)

### Setup Steps

1. **Navigate to the docker directory:**
   ```bash
   cd docker
   ```

2. **Copy example files to create your working configuration:**
   ```bash
   # Copy docker-compose.yaml (this file is gitignored)
   cp example.docker-compose.yaml docker-compose.yaml
   
   # Copy environment variables file
   cp example.env .env
   
   # Copy AI service configuration
   cp example.config.yaml config.yaml
   ```

3. **Configure your environment:**
   
   Edit the `.env` file and set your required variables:
   - `OPENAI_API_KEY` - Your OpenAI API key (required)
   - `GEMINI_API_KEY` - Your Gemini API key (optional, if using Gemini)
   - `USER_UUID` - A UUID v4 for user identification
   - `POSTHOG_API_KEY` - PostHog API key (optional, for telemetry)
   - `POSTHOG_HOST` - PostHog host URL (optional, for telemetry)
   
   You can also adjust version numbers and port settings as needed.

4. **Configure your LLM provider:**
   
   Edit `config.yaml` to configure your LLM provider. See [configuration examples](https://github.com/Canner/WrenAI/tree/main/wren-ai-service/docs/config_examples) for different providers.

5. **Start all services:**
   ```bash
   docker compose up --build
   ```
   
   Or run in the background:
   ```bash
   docker compose up --build -d
   ```

6. **Access the application:**
   
   Open your browser and navigate to `http://localhost:3000` (or the port specified in `HOST_PORT` in your `.env` file).

### Stop Services

To stop all services:
```bash
docker compose down
```

### Services Included

- **wren-ui**: Web UI (port 3000 by default)
- **wren-ai-service**: AI service for query generation
- **wren-engine**: SQL execution engine
- **ibis-server**: Ibis server for data processing
- **qdrant**: Vector database for embeddings
- **bootstrap**: Initialization service

### Custom LLM Configuration

To use a custom LLM provider, modify the `config.yaml` file and restart the AI service:

```bash
docker compose up -d --force-recreate wren-ai-service
```

For detailed LLM configuration options, see the [AI Service Configuration documentation](../wren-ai-service/docs/configuration.md).

### Troubleshooting

- **Port conflicts**: If port 3000 is already in use, modify `HOST_PORT` in your `.env` file
- **Build issues**: Make sure Docker has enough memory allocated (recommended: 8GB+)
- **Service not starting**: Check logs with `docker compose logs [service-name]`

For more detailed setup instructions, see the [wren-ui README](./wren-ui/README.md) or the [docker README](./docker/README.md).

## 🏗️ Architecture

<p align="center">
  <img width="1011" height="682" alt="wrenai-architecture" src="https://github.com/user-attachments/assets/e99b999f-9912-4fa7-921a-9c86b6b83354" />
</p>

👉 [Learn more about our Design](https://getwren.ai/post/how-we-design-our-semantic-engine-for-llms-the-backbone-of-the-semantic-layer-for-llm-architecture?utm_source=github&utm_medium=content&utm_campaign=readme)



## 🔌 Data Sources

If your data source is not listed here, vote for it in our [GitHub discussion thread](https://github.com/Canner/WrenAI/discussions/327). It will be a valuable input for us to decide on the next supported data sources.
- Athena (Trino)
- Redshift
- BigQuery
- DuckDB
- PostgreSQL
- MySQL
- Microsoft SQL Server
- ClickHouse
- Oracle
- Trino
- Snowflake

## 🤖 LLM Models

Wren AI supports integration with various Large Language Models (LLMs), including but not limited to:
- OpenAI Models
- Azure OpenAI Models
- DeepSeek Models
- Google AI Studio – Gemini Models
- Vertex AI Models (Gemini + Anthropic)
- Bedrock Models
- Anthropic API Models
- Groq Models
- Ollama Models
- Databricks Models

Check [configuration examples here](https://github.com/Canner/WrenAI/tree/main/wren-ai-service/docs/config_examples)!

> [!CAUTION]
> The performance of Wren AI depends significantly on the capabilities of the LLM you choose. We strongly recommend using the most powerful model available for optimal results. Using less capable models may lead to reduced performance, slower response times, or inaccurate outputs.

## 📚 Documentation

Visit [Wren AI documentation](https://docs.getwren.ai/oss/overview/introduction?utm_source=github&utm_medium=content&utm_campaign=readme) to view the full documentation.

## 📪 Keep Posted?

[Subscribe our blog](https://www.getwren.ai/blog/?utm_source=github&utm_medium=content&utm_campaign=readme) and [Follow our LinkedIn](https://www.linkedin.com/company/wrenai)

## 🛠️ Contribution

1.	Star ⭐ the repo to show support (it really helps).
2.	Open an issue for bugs, ideas, or discussions.
3.	Read [Contribution Guidelines](https://github.com/Canner/WrenAI/blob/main/CONTRIBUTING.md) for setup & PR guidelines.

## ⭐️ Community

- Join 1.3k+ developers in our [Discord](https://discord.gg/5DvshJqG8Z) for real-time help and roadmap previews.
- If there are any issues, please visit [GitHub Issues](https://github.com/Canner/WrenAI/issues).
- Explore our [public roadmap](https://wrenai.notion.site/) to stay updated on upcoming features and improvements!

Please note that our [Code of Conduct](./CODE_OF_CONDUCT.md) applies to all Wren AI community channels. Users are **highly encouraged** to read and adhere to them to avoid repercussions.

## 🎉 Our Contributors
<a href="https://github.com/canner/wrenAI/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Canner/WrenAI" />
</a>

<p align="right">
  <a href="#top">⬆️ Back to Top</a>
</p>

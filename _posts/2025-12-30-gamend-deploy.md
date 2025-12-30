---
layout: post
author: dragos
title: Gamend - Game Server Deploy using fly
tag: game
---

![banner](/assets/img/gamend/banner.png)

This tutorial will help you to deploy Gamend using [fly.io](https://fly.io).

1. Create an account on [fly.io](https://fly.io).
2. Install locally [flyctl](https://fly.io/docs/flyctl/install/):

  ```sh
  # macOS
  brew install flyctl
  # Linux
  curl -L https://fly.io/install.sh | sh
  # Windows
  pwsh -Command "iwr https://fly.io/install.ps1 -useb | iex"
  ```

3. Clone/fork the [gamend_starter](https://github.com/appsinacup/gamend_starter) repo.

4. Run in the repo the following command:

  ```sh
  fly deploy
  ```

5. Select y on the re-use fly.io (first prompt), then press Enter on other questions:

  ![banner](/assets/img/gamend_deploy/1-launch.png)

6. That's it, at the end you will be given a URL you can visit to see the app:

  ![view](/assets/img/gamend_deploy/2-view.png)

7. Go to the URL and Register using Email (first account created will be Admin).

  ![web](/assets/img/gamend_deploy/3-web.png)

## Notes:

This starter uses **dev mode** and has nothing configured. If you want to do a real deployment, configure secrets in the fly.io Secrets tab (eg. OAuth, Email server, etc.)

  ![4-secrets](/assets/img/gamend_deploy/4-secrets.png)

Also, this is a simple deployment with 1 instance, SQLite and local caching. For more complex deployments, see the [Scaling article](https://appsinacup.com/gamend-scaling/).

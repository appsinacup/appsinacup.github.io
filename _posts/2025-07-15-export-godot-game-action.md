---
layout: post
title: Export Godot Game Action
tag: action
---

Reusable Action that builds a Godot game. These actions build and sign the games with the [Godot Engine](https://godotengine.org) of the version specified. It supports all platforms: desktop, mobile and web.

Sample usage:
```yml
- name: Build Game Linux
  uses: appsinacup/action_export_godot_game@master
  with:
    game-name: MyGame
    platform-name: Linux x86_64
```

You can find the action on [GitHub](https://github.com/appsinacup/action_export_godot_game).

## How to use it

Complete usage on [appsinacup/project_godot_autobuild](https://github.com/appsinacup/project_godot_autobuild):

```yml
env:
  GAME_NAME: GameName
  ANDROID_PACKAGE: com.godot.game
  IOS_PACKAGE: com.godot.game
jobs:
  build:
    runs-on: ${{ matrix.platform.os }}
    strategy:
      fail-fast: false
      matrix:
        platform: [
          { name: "Windows Desktop x86_64", os: "ubuntu-latest" },
          { name: "Windows Desktop x86_32", os: "ubuntu-latest" },
          { name: "Windows Desktop arm64", os: "ubuntu-latest" },
          { name: "Linux x86_64", os: "ubuntu-latest" },
          { name: "Linux x86_32", os: "ubuntu-latest" },
          { name: "Linux arm64", os: "ubuntu-latest" },
          { name: "Linux arm32", os: "ubuntu-latest" },
          { name: "macOS", os: "macos-latest" },
          { name: "iOS", os: "macos-latest" },
          { name: "Android", os: "ubuntu-latest" },
          { name: "Web", os: "ubuntu-latest" },
        ]

    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Build Game
        uses: appsinacup/action_export_godot_game@master
        with:
          godot-version: 4.4.1-stable
          game-name: ${{ env.GAME_NAME }}
          android-package: ${{ env.ANDROID_PACKAGE }}
          ios-package: ${{ env.IOS_PACKAGE }}
          platform-name: ${{ matrix.platform }}
          secret-macos-build-certificate-base64: ${{ secrets.BUILD_CERTIFICATE_BASE64 }}
          secret-p12-password: ${{ secrets.P12_PASSWORD }}
          secret-keychain-password: ${{ secrets.KEYCHAIN_PASSWORD }}
          secret-ios-distribution-certificate-base64: ${{ secrets.DISTRIBUTION_CERTIFICATE_BASE64 }}
          secret-ios-deploy-provision-profile-ios-base64: ${{ secrets.DEPLOY_PROVISION_PROFILE_IOS_BASE64 }}
          secret-apple-id: ${{ secrets.APPLE_ID }}
          secret-apple-team-id: ${{ secrets.APPLE_TEAM_ID }}
          secret-apple-password: ${{ secrets.APP_SPECIFIC_PASSWORD }}
          secret-android-keystore-base64: ${{ secrets.ANDROID_KEYSTORE_BASE64 }}
          secret-android-keystore-password: ${{ secrets.ANDROID_KEYSTORE_PASSWORD }}
          secret-android-keystore-user: ${{ secrets.ANDROID_KEYSTORE_USER }}
```

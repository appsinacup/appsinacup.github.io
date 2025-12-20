---
layout: post
author: dragos
title: Polyglot Pirates - Design Document
tag: game
---

![polyglot logo](/assets/img/polyglot-pirates/icon_nobg.png)

# What to test

When testing the app, test as many flows as possible, to validate they still work. When testing a specific version, you can keep track of testing progress by using the following:

## Version <eg. 1.0.123>

[1] Login Flow:
- [1.1] Login Page: <test_results>
- [1.2] First Time Page: <test_results>

[2] Main Menu Flow:
- [2.1] Island Page: <test_results>
- [2.2] Settings Page: <test_results>
- [2.3] Profile Page: <test_results>
- [2.4] Friends Page: <test_results>
- [2.5] Dictionaries Page: <test_results>
- [2.6] Leaderboards Page: <test_results>

Notes:
- Where it says test_results, put either **succeeded**, **bug** or **notes**.
- If testing multiple times, you can disable or speed up initial animation.

## Bug Reporting

If on any of the flows you find either an edge case that is not yet treated or a bug, report it so it can be fixed (on our [Discord](https://discord.com/invite/56dMud8HYn) Page). Thanks in advance.

# 1. Login Flow

Logging into the app can be done either by using OAuth (eg. Apple/Google) or by using Device Auth.

If you are already logged in, you can Logout by going to Settings -> Logout or Delete (scroll down). Logging out will still retain your user profile (eg. configuration/language selection), while Delete will delete your user account so you can start from scratch. Both of these have a confirmation window.

## 1.1 Login Page

This page is only visible if you are not logged in. After you login, the login should be cached for at least 30 days.

### Validate Functionality

- [ ] Change the Language.
- [ ] Login with Apple/Google/etc. (Depends on mobile) or continue as Guest (on web not available).

![Login Screen](/assets/img/polyglot-pirates-testing/LoginScreen.png)

# 1.2 First Time Page

If you already configured your target language, this page will not show up anymore.

## Validate Functionality

- [ ] Configure your Name
- [ ] Change the Language
- [ ] Configure your Target Language (what language you want to learn)
- [ ] Continue button: disabled until the Target Language is set.

![Initial Screen](/assets/img/polyglot-pirates-testing/InitialScreen.png)

# 1.3 Initial Animation

The initial animation happens after First Time Page (or Login Page if First Time is skipped). It is skipped if the player is in a Game. If you want to replay the Initial Animation, Restart the game.

## Validate Functionality
- [ ] Can be sped up by holding mouse down
- [ ] Can be skipped by going to Settings -> Skip Introduction


![IntroAnimation](/assets/img/polyglot-pirates-testing/IntroAnimation.webm)

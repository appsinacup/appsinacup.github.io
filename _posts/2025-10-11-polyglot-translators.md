---
layout: post
author: dragos
title: Polyglot Pirates Wanted
tag: game
---

<!-- [Attributes by Finsweet] Auto Video -->
<script defer src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-autovideo@1/autovideo.js"></script>

We are looking for help from people interested to translate words for our upcoming game, **Polyglot Pirates**, a language learning game about pirates traveling the seas.

1. [Translations](#2-translations)
    - [Words](#words)
2. [Gameplay](#1-gameplay)
    - [Select Language](#select-language)
    - [Gameplay - Word match](#gameplay---word-match)
    - [Gameplay - Hangman](#gameplay---hangman)
    - [Gameplay - Letter Square](#gameplay---letter-square)

# 1. Translations

For start, we will focus on few languages of the 30 that there will be in total. As well as a total of 1000 easy to use words.

All of the public data as well as the words will be located in the [Polyglot Dictionaries](https://github.com/appsinacup/polyglot-dictionaries), a free and open source repository you can contribute to.

## Words

The words will come from [wiktionary.en](https://www.wiktionary.org), the free Dictionary.

Our process of translation will work like this:
- download `wiktionary.en`
- use our initial list of words, [words_1000_en.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/words_1000_en.csv)
- get only the translation for every word from `wiktionary.en`.
- go through every translation with more than 1 sense (you will help here) and chose the **best** one.


# 2. Gameplay


## Select Language

When the game starts, you will be able to set your base language and the language you want to learn:

<image style="width: 100%;" src="/assets/img/polyglot/language_select.png">
</image>

## Gameplay - Word match

This is an older prototype of word match - Match words to have the player move or attack in the game:

<img controls loop autoplay muted style="width: 100%;" src="/assets/img/polyglot/gameplay-navigate.gif"/>

## Gameplay - Hangman

Guess letter by letter from base language to target language. You can make mistakes, but if you make too many, you will have to wait until you can guess again. Every word you complete moves the ship or attacks in the game:

<img controls loop autoplay muted style="width: 100%;" src="/assets/img/polyglot/hangman.gif"/>

## Gameplay - Letter Square

Find words inside a square of letters. After a while, you will get hints (this is WIP):

<image style="width: 100%;" src="/assets/img/polyglot/letter_square.png">
</image>

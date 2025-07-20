---
layout: post
author: dragos
title: Tiny Lobby
tag: server
excerpt: C++ scriptable multiplayer lobby server.
image: https://github.com/appsinacup/tiny_lobby/raw/main/docs/example.gif
---

<image controls autoplay muted style="width: 100%;" src="https://github.com/appsinacup/tiny_lobby/raw/main/docs/example.gif">
</image>

Multiplayer C++ Lobby Server with login for create / join / find lobbies.. It starts a websocket server and has backend scripting in Luau and AngelScript. Check it on [GitHub](https://github.com/appsinacup/tiny_lobby).

## How to use it

Download the `tiny_lobby` binary for your OS and, create a `games.ini` file with the following near the binary:

```sh
[12345678-1234-1234-1234-1234567890123]
lobby_control=lua
folder=my_folder
```

For `12345678-1234-1234-1234-1234567890123` put any guid that is unique. For `lobby_control` select either `lua` or `angelscript`.

Then, create a folder with the folder name you specified inside `scripts`. Inside it put either a `main.lua` file or a `main.as` file (depending on if you selected `lua` or `angelscript`).

The structure should looks like this:

```sh
tiny_lobby
games.ini
scripts/
    my_folder/
        main.lua
```

Inside `main.lua`, write the following:

```lua
local main = {}

-- Example of function exported that echoes a message
function main.echo(message: string)
    print("Echo: " .. message)
    -- Return the message back to the caller
    return message
end

return main
```

Now, run the `tiny_lobby` binary. You should see the following output:

```sh
Starting webserver without SSL
Listening on port 8080
Loading game from world with id 12345678-1234-1234-1234-1234567890123
```

Now the server is up and the `echo` function can be called.

Next, check out the [Documentation](https://github.com/appsinacup/documentation_lobby).

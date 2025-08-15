---
layout: post
author: dragos
title: Tiny Lobby
tag: server
---

<image controls autoplay muted style="width: 100%;" src="https://github.com/appsinacup/tiny_lobby/raw/main/docs/example.gif">
</image>

Multiplayer C++ Game Server with Lobby Management and Lua scripting. It starts a websocket server and has backend scripting in Luau. Check it on [GitHub](https://github.com/appsinacup/tiny_lobby).

## Server - How to use it

Download the `tiny_lobby` binary for your OS and run create the following folders and files:

```sh
tiny_lobby # Binary you downloaded
scripts/
    my_game/
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
Loading game from world with id my_game
```

Now the server is up and the `echo` function can be called.

Next, check out the [Documentation](https://github.com/appsinacup/documentation_lobby).

## Godot - How to connect it

Download the [Tiny Lobby Client](https://godotengine.org/asset-library/asset/4200) for Godot. Create a node of type `ScriptedLobbyClient` and set the `game_d` property to the game folder you created above.

Then, create and run the following script:

```py
class_name Lobby
extends ScriptedLobbyClient

func _ready():
  await connect_to_server().finished
  await create_lobby("lobby_name").finished
  var result = await lobby_call("echo", ["test"]).finished
  print(result.get_result())
```

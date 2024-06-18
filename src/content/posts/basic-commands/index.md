---
title: Linux Basic Commands
published: 2024-06-14
description: Basic commands for linux you need to now.
tags: [Fundamentals, Commands]
category: Linux
draft: false
---

## Navigation and Directory Management

<table>
    <tr>
        <th>Command</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>cd</code></td>
        <td>
            Changes the current directory.
        </td>
    </tr>
    <tr>
        <td><code>ls</code></td>
        <td>
            Shows all content details from a directory or file. </br>
	        <code>-a</code> Show hidden files (dot files)</br>
            <code>-l</code> Readable list</br>
	        <code>-i</code> Show index
        </td>
    </tr>
        <td><code>pwd</code></td>
        <td>
            Shows current directory.
        </td>
    </tr>
    <tr>
        <td><code>mkdir</code></td>
        <td>
           Creates a directory.
        </td>
    </tr>
    <tr>
        <td><code>mktemp</code></td>
        <td>
            Creates a temporary file or directory. </br>
	        <code>-d</code> Create directories</br>
        </td>
    </tr>
    <tr>
        <td><code>tree</code></td>
        <td>
            Displays a directory and file structure in a tree format.
        </td>
    </tr>
</table>

## File Management

<table>
    <tr>
        <th>Command</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>touch</code></td>
        <td>
            Creates a new file.
        </td>
    </tr>
    <tr>
        <td><code>cp</code></td>
        <td>
            Copies a file.
        </td>
    </tr>
    <tr>
        <td><code>mv</code></td>
        <td>
            Moves or renames a file.
        </td>
    </tr>
    <tr>
        <td><code>rm</code></td>
        <td>
            Deletes files or directories</br>
	        <code>-r</code> Delete directory recursively.</br>
        </td>
    </tr>
    <tr>
        <td><code>ln</code></td>
        <td>
            Creates hard links and symlinks between files.
        </td>
    </tr>
    <tr>
        <td><code>head</code></td>
        <td>
            Displays the first lines of a file.
        </td>
    </tr>
    <tr>
        <td><code>tail</code></td>
        <td>
            Displays the last lines of a file.
        </td>
    </tr>
    <tr>
        <td><code>df</code></td>
        <td>
            Shows disk space usage of file systems.
        </td>
    </tr>
    <tr>
        <td><code>du</code></td>
        <td>
            Shows disk space usage of files and directories.
        </td>
    </tr>
</table>

## File Editing and Viewing

<table>
    <tr>
        <th>Command</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>cat</code></td>
        <td>
            Shows file content.
        </td>
    </tr>
    <tr>
        <td><code>nano</code></td>
        <td>
            Opens a file with a basic text editor.
        </td>
    </tr>
    <tr>
        <td><code>less</code></td>
        <td>
            Displays file content with pagination.
        </td>
    </tr>
    <tr>
        <td><code>more</code></td>
        <td>
           Similar to less, displays file content with pagination.
	    </td>
    </tr>
    <tr>
        <td><code>echo</code></td>
        <td>
            Prints to the terminal.
        </td>
    </tr>
</table>

## Permissions and Ownership

<table>
    <tr>
        <th>Command</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>chmod</code></td>
        <td>
            Shows file content.
        </td>
    </tr>
    <tr>
        <td><code>chown</code></td>
        <td>
            Changes permissions.
        </td>
    </tr>
    <tr>
        <td><code>umask</code></td>
        <td>
            Changes owner.
        </td>
    </tr>
    <tr>
        <td><code>more</code></td>
        <td>
           Sets the default file creation permissions mask.
	    </td>
    </tr>
</table>

## Search and Location

<table>
    <tr>
        <th>Command</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>find</code></td>
        <td>
            Finds something in a path.
        </td>
    </tr>
    <tr>
        <td><code>locate</code></td>
        <td>
            Finds something through the database.
        </td>
    </tr>
    <tr>
        <td><code>updatedb</code></td>
        <td>
            Updates the local database for locate.
        </td>
    </tr>
    <tr>
        <td><code>which</code></td>
        <td>
           Shows the full path of a command.
	    </td>
    </tr>
</table>

## System and User Information

<table>
    <tr>
        <th>Command</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>id</code></td>
        <td>
            Shows the user ID and all the groups the user belongs to.
        </td>
    </tr>
    <tr>
        <td><code>uname</code></td>
        <td>
            Shows machine information.
        </td>
    </tr>
    <tr>
        <td><code>whoami</code></td>
        <td>
            Shows current user.
        </td>
    </tr>
    <tr>
        <td><code>date</code></td>
        <td>
           Displays the current date and time.
	    </td>
    </tr>
    <tr>
        <td><code>uptime</code></td>
        <td>
            Shows how long the system has been running.
	    </td>
    </tr>
    <tr>
        <td><code>hostname</code></td>
        <td>
           Shows or sets the system's hostname.
	    </td>
    </tr>
</table>

## Process Management and Administration

<table>
    <tr>
        <th>Command</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>ps</code></td>
        <td>
            Shows the running processes.
        </td>
    </tr>
    <tr>
        <td><code>top</code></td>
        <td>
            Displays a real-time list of running processes.
        </td>
    </tr>
    <tr>
        <td><code>htop</code></td>
        <td>
            Similar to top, but with an interactive and user-friendly interface.
        </td>
    </tr>
    <tr>
        <td><code>kill</code></td>
        <td>
           Kills a running process.
	    </td>
    </tr>
</table>

## Network Commands

<table>
    <tr>
        <th>Command</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>ifconfig</code></td>
        <td>
            Shows network interfaces and IP addresses.
        </td>
    </tr>
</table>

## Others

<table>
    <tr>
        <th>Command</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>awk</code></td>
        <td>
           Performs different operations with text.
        </td>
    </tr>
    <tr>
        <td><code>grep</code></td>
        <td>
           Filters results.
        </td>
    </tr>
    <tr>
        <td><code>xargs</code></td>
        <td>
            Grabs the output
        </td>
    </tr>
    <tr>
        <td><code>alias</code></td>
        <td>
            Create command aliases.
        </td>
    </tr>
    <tr>
        <td><code>history</code></td>
        <td>
           Show command history.
	    </td>
    </tr>
  <tr>
        <td><code>clear</code></td>
        <td>
           Clears the terminal screen.
	    </td>
    </tr>
    <tr>
        <td><code>su</code></td>
        <td>
           Changes user.
	    </td>
    </tr>
    <tr>
        <td><code>man</code></td>
        <td>
           Shows manual pages for commands.
	    </td>
    </tr>
</table>

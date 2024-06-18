---
title: Permissions
published: 2024-06-17
description: "All you need to know about permissions in Linux."
image: "./cover.png"
imageWidth: "w-3/5"
tags: [Fundamentals, Permissions]
category: Linux
---

In Linux, file permissions determine who can read, write, or execute a file. These permissions are represented by the characters **`r`**, **`w`**, and **`x`**:

1. **`r`** (read): Permission to read the file.
2. **`w`** (write): Permission to modify the file.
3. **`x`** (execute): Permission to execute the file as a program.

### Structure of Permissions: `user`, `group`, `others`

File permissions are divided into three sets of three characters, each set representing a different category of users:

1. **User**: The user who owns the file.
2. **Group**: The group that owns the file.
3. **Others**: All other users.

For example, the permission string `rwxr-xr--` can be broken down as follows:

1. **User**: `rwx` (read, write, execute)
2. **Group**: `r-x` (read, execute)
3. **Others**: `r--` (read only)

### Binary and Octal Representation of Permissions

Each permission character can be represented as a bit in binary, and each set of permissions can be represented as an octal (base-8) number.

| Permission | Binary | Octal |
| ---------- | ------ | ----- |
| ---        | 000    | 0     |
| --x        | 001    | 1     |
| -w-        | 010    | 2     |
| -wx        | 011    | 3     |
| r--        | 100    | 4     |
| r-x        | 101    | 5     |
| rw-        | 110    | 6     |
| rwx        | 111    | 7     |

So, `rwxr-xr--` in binary is:

1. **User**: `rwx` = 111 = 7
2. **Group**: `r-x` = 101 = 5
3. **Others**: `r--` = 100 = 4

And in octal, `rwxr-xr--` is represented as `754`.

## Modifying Permissions

### Using Letters (Symbolic Mode)

**Add permission:**

- Add execute permission for the user:

  ```bash

  chmod u+x file.txt

  ```

- Add write permission for the group:

  ```bash

  chmod g+w file.txt

  ```

- Add read permission for others:

  ```bash

  chmod o+r file.txt

  ```

**Remove permission:**

- Remove execute permission for the user:

  ```bash

  chmod u-x file.txt

  ```

- Remove write permission for the group:

  ```bash

  chmod g-w file.txt

  ```

- Remove read permission for others:

  ```bash

  chmod o-r file.txt

  ```

**Change permission:**

- Set read and write permissions for the user, remove all permissions for the group, and set read permission for others:

  ```bash

  chmod u=rw,g=,o=r file.txt

  ```

### Using Numbers (Octal Mode)

- Set all permissions for the user, read and execute for the group and read and execute for others.

  ```bash

  chmod 755 file.txt

  ```

- Set **read** and **write** permissions for the user, remove **all** permissions for the **group**, and set **read** permission for **others.**

  ```bash

  chmod 604 file.txt

  ```

---
title: "Find"
description: "An advanced guide about find command in linux"
published: 2024-06-14
author: "h4rck1"
category: Linux
tags: ["linux", "command"]
hasSpanish: true
---

```bash
find [path] [options] [expression]
```

- **path**: Specifies the path where the search starts. If not provided, the current directory is used.
- **options**: Modify the behavior of the search.
- **expression**: Define the search criteria (by name, type, size, etc.).

### Main options of `find`

### **`-name`**

Searches for files and directories by name.

```bash

find /path -name "file.txt"

```

### **`-iname`**

Searches for files and directories by name, case insensitive.

```bash

find /path -iname "file.txt"

```

### **`-type`**

Searches by file type. Common types include:

- `f` Regular file
- `d` Directory
- `l` Symbolic link

```bash

find /path -type f
find /path -type d
find /path -type l

```

### **`-size`**

Searches for files by size. Sizes can be specified in:

- `c` bytes
- `k` kilobytes
- `M` megabytes
- `G` gigabytes

```bash

find /path -size +10M  # Files larger than 10 MB
find /path -size -1G   # Files smaller than 1 GB

```

### **`-user`**

Searches for files and directories owned by a specific user.

```bash

find /path -user username

```

### **`-group`**

Searches for files and directories belonging to a specific group.

```bash

find /path -group groupname

```

### **`-perm`**

Searches for files and directories with specific permissions.

```bash

find /path -perm 755  # Files with 755 permissions
find /path -perm /u+w # Files writable by the user

```

### **`-mtime` ,`-atime`, `-ctime`**

Searches for files based on modification, access, or status change time.

- `mtime` Content modification time.
- `atime` Access time.
- `ctime` Metadata change time.

```bash

find /path -mtime -1  # Files modified in the last 24 hours
find /path -atime +7  # Files accessed more than 7 days ago

```

### **`exec`**

Executes a command on the found files.

```bash

find /path -name "*.log" -exec rm {} \;  # Deletes found .log files

```

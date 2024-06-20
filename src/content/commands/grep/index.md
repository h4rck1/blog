---
title: "Grep"
description: "An advanced guide about grep command in linux"
published: 2024-06-14
author: "h4rck1"
category: Linux
tags: ["linux", "command"]
hasSpanish: true
---

```bash

# You can use it like this
grep [options] pattern [file]

# Or with pipe(|)
cat [file] | grep [options] pattern
```

- **options**: Modify the behavior of the filter.
- **pattern**: The text or regular expression you want to search for.
- **file**: The files in which you want to search. If not specified, `grep` searches in the standard input.

### Main options of `grep`

### `-i`

Ignores case while searching.

```bash

grep -i "pattern" file.txt
```

### **`-v`**

Inverts the match, showing lines that do not contain the pattern.

```bash

grep -v "pattern" file.txt
```

### **`-r`**

Searches recursively in directories.

```bash

grep -r "pattern" directory/
```

### **`-w`**

Searches for whole words.

```bash

grep -w "pattern" file.txt
```

### **`-E`**

Uses extended regular expressions.

```bash

grep -E "pattern|another" file.txt
```

### **`-e`**

Allows specifying multiple patterns.

```bash

grep -e "pattern1" -e "pattern2" file.txt
```

### **`-n`**

Displays the line numbers along with the matching lines.

```bash

grep -n "pattern" file.txt
```

### **`-c`**

Displays only the count of matching lines.

```bash

grep -c "pattern" file.txt
```

### **`-o`**

Displays only the matching parts of the lines.

```bash

grep -o "pattern" file.txt
```

### **`-H`**

Displays the file name with the matching lines. Useful when searching in multiple files.

```bash

grep -H "pattern" file1.txt file2.txt
```

### **`-h`**

Does not display the file names in the output. Useful when searching in multiple files.

```bash

grep -h "pattern" file1.txt file2.txt
```

### **`-f`**

Takes patterns from a file.

```bash

grep -f patterns.txt file.txt
```

### **`-x`**

Matches entire lines exactly with the pattern.

```bash

grep -x "pattern" file.txt
```

### **`-color`**

Highlights the matching pattern in the output.

```bash

grep --color "pattern" file.txt
```

## [NUM] Context

### **`-A [NUM]`**

Displays [NUM] lines after each matching line.

```bash

grep -A 3 "pattern" file.txt
```

### **`-B [NUM]`**

Displays [NUM] lines before each matching line.

```bash

grep -B 3 "pattern" file.txt
```

### **`-C [NUM]`**

Displays [NUM] lines before and after each matching line.

```bash

grep -C 3 "pattern" file.txt
```

## Comparing files

### **`-l`**

Displays only the names of files containing the pattern.

```bash

grep -l "pattern" file1.txt file2.txt
```

### **`-L`**

Displays only the names of files that do not contain the pattern.

```bash

grep -L "pattern" file1.txt file2.txt
```

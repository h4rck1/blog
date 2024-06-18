---
title: "Awk"
description: "An advanced guide about awk command in linux"
published: 2024-06-14
author: "h4rck1"
category: Linux
tags: ["linux", "command"]
hasSpanish: true
---

```bash
awk 'pattern {action}' file
```

- **pattern**: The condition to match.
- **action**: The operation to perform when the pattern matches.

### Built-in Variables

- **`$0`**: Represents the entire current line.
- **`$1, $2, ...`**: Represents the first, second, etc., fields in the current line.
- **`NF`**: Number of fields in the current record.
- **`NR`**: Number of the current record (line number).
- **`FS`**: Field separator (default is space or tab).
- **`OFS`**: Output field separator.
- **`RS`**: Record separator (default is newline).
- **`ORS`**: Output record separator.

### Printing Specific Columns

Use **`awk`** to extract specific fields or columns from text files, such as log files or command outputs.

```bash

awk '{print $1, $3, $NF}' file.txt

```

### Print Lines Where the Last Field Matches a Pattern

To print lines where the last field matches a specific pattern.

```bash

awk '$NF ~ /pattern/' file.txt

```

### Print the Second-to-Last Field

To print the second-to-last field of each line, you can use `$(NF-1)`.

```bash

awk '{print $(NF-1)}' file.txt

```

### Filtering Rows Based on a Condition

**`awk`** can be used to filter rows that meet certain conditions, such as rows containing specific text.

```bash

awk '/pattern/ {print $0}' file.txt

```

### Processing Log Files

Use **`awk`** to process log files and extract meaningful information.

```bash

awk '$3 == "ERROR" {print $0}' logfile.txt

```

This command prints all lines where the third column is "ERROR".

### Calculating Statistics

`awk` can perform calculations, making it useful for generating statistics from data.

```bash

awk '{sum += $1} END {print sum}' numbers.txt

```

This command sums up the values in the first column of `numbers.txt` and prints the total.

## Less Common but Very Useful Uses

### Replacing Text in a File

**`awk`** can be used to replace text in a file.

```bash

awk '{gsub(/oldtext/, "newtext"); print}' file.txt

```

This command replaces all occurrences of "oldtext" with "newtext" in `file.txt`.

### Field Separator

**`awk`** can handle different field separators, not just spaces or tabs.

```bash

awk -F',' '{print $1, $2}' file.csv

```

This command uses a comma as the field separator and prints the first and second columns of a CSV file.

### Complex Conditional Statements

**`awk`** can use complex conditional statements for more sophisticated data processing.

```bash

awk '{if ($1 > 100 && $2 < 50) print $0}' file.txt

```

This command prints lines where the first column is greater than 100 and the second column is less than 50.

### Formatted Output

**`awk`** can format the output in a structured way.

```bash

awk '{printf "Name: %s, Age: %d\n", $1, $2}' file.txt

```

This command prints the first and second columns in a formatted way.

### Working with Arrays

**`awk`** supports arrays, which can be useful for more advanced text processing.

```bash

awk '{arr[$1]++} END {for (i in arr) print i, arr[i]}' file.txt

```

This command counts the occurrences of each unique value in the first column and prints the results.

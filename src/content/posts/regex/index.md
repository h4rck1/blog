---
title: RegEx
published: 2024-06-19
description: "A basic guide about RegEx."
image: "./cover.jpg"
tags: [Other, RegEx]
category: Linux
---

Regular expressions `RegEx` are powerful tools used for pattern matching and text manipulation in various programming and scripting languages. They allow users to search, match, and manipulate text based on specific patterns.

### Commonly Used Regular Expressions in Linux

### Basic Concepts

1. **Literal Characters**: Matches the exact characters.
   - Example: `abc` matches "abc".
2. **Metacharacters**: Special characters that have specific meanings in regex.

   - `.` Matches any single character except a newline.
   - `*` Matches zero or more occurrences of the preceding element.
   - `+` Matches one or more occurrences of the preceding element.
   - `?` Matches zero or one occurrence of the preceding element.
   - `^` Matches the start of a line.
   - `$` Matches the end of a line.
   - `[]` Matches any single character within the brackets.
   - `|` OR operator, matches either the pattern before or after the `|`.
   - `()` Groups multiple tokens together and remembers the matched text.
   - `\` Escapes a metacharacter to be used as a literal.

   ***

### Examples and Usage

1. **Literal Match**

   Matches the exact characters in the text.

   ```bash
   grep "abc" file.txt
   ```

   > This command searches for the string `abc`.

2. **Dot `.`**

   Matches any single character except a newline.

   ```bash
   grep "a.c" file.txt
   ```

   > This command matches `abc`, `a1c`, `a-c`, etc.

3. **Asterisk `\*`**

   Matches zero or more occurrences of the preceding element.

   ```bash
   grep "ab*c" file.txt
   ```

   > This command matches `ac`, `abc`, `abbc`, `abbbc`, etc.

4. **Plus `+`**

   Matches one or more occurrences of the preceding element.

   ```bash
   grep "ab+c" file.txt
   ```

   > This command matches `abc`, `abbc`, `abbbc`, etc. But not `ac`.

5. **Question Mark `?`**

   Matches zero or one occurrence of the preceding element.

   ```bash
   grep "ab?c" file.txt
   ```

   > This command matches `ac` and `abc`.

6. **Caret `^`**

   Matches the start of a line.

   ```bash
   grep "^abc" file.txt
   ```

   > This command matches any line that starts with `abc` .

7. **Dollar `$`**

   Matches the end of a line.

   ```bash
   grep "abc$" file.txt
   ```

   > This command matches any line that ends with `abc`.

8. **Brackets `[]`**

   Matches any single character within the brackets.

   ```bash
   grep "[aeiou]" file.txt
   ```

   > This command matches any line containing a vowel `a`, `e`, `i`, `o`, `u`.

9. **Negation within Brackets `[^]`**

   Matches any single character not within the brackets.

   ```bash
   grep "[^aeiou]" file.txt
   ```

   > This command matches any line containing a character that is not a vowel.

10. **OR `|`**

    Matches either the pattern before or the pattern after the `|`.

    ```bash
    grep "abc\|def" file.txt
    ```

    > This command matches lines containing either `abc` or `def`.

11. **Grouping `()`**

    Groups multiple tokens together and remembers the matched text.

    ```bash
    grep "\(abc\)\{2,\}" file.txt
    ```

    > This command matches lines containing `abcabc` .

12. **Escaping `\`**

    Escapes a metacharacter to be used as a literal.

    ```bash
    grep "a\.c" file.txt
    ```

    > This command matches `a.c` in `file.txt`.

### Advanced Examples

1. **Matching Word Boundaries**

   Use `\b` to match word boundaries.

   ```bash
   grep "\bword\b" file.txt
   ```

   > This command matches the word `word` as a whole word.

2. **Matching Digits**

   Use `\d` to match any digit.

   ```bash
   grep "\d" file.txt
   ```

   > This command matches any digit `0-9`.

3. **Matching Non-Digits**

   Use `\D` to match any non-digit.

   ```bash
   grep "\D" file.txt
   ```

   > This command matches any `non-digit`.

4. **Matching Whitespace**

   Use `\s` to match any whitespace character.

   ```bash
   grep "\s" file.txt
   ```

   > This command matches any whitespace character `space`, `tab`, etc.

5. **Matching Non-Whitespace**

   Use `\S` to match any non-whitespace character.

   ```bash
   grep "\S" file.txt
   ```

   > This command matches any `non-whitespace` character.

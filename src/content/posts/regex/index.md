---
title: RegEx
published: 2024-06-19
description: "Una guía básica de RegEx."
image: "./cover.jpg"
tags: [Other, RegEx]
category: Linux
isSpanish: true
---

Las expresiones regulares `RegEx` son herramientas poderosas utilizadas para la coincidencia de patrones y la manipulación de texto en varios lenguajes de programación y scripting. Permiten a los usuarios buscar, coincidir y manipular texto basado en patrones específicos.

### Expresiones Regulares Comúnmente Usadas en Linux

### Conceptos Básicos

1. **Caracteres Literales**: Coinciden con los caracteres exactos.
   - Ejemplo: `abc` coincide con "abc".
2. **Metacaracteres**: Caracteres especiales que tienen significados específicos en regex.

   - `.` Coincide con cualquier carácter excepto un salto de línea.
   - `*` Coincide con cero o más ocurrencias del elemento anterior.
   - `+` Coincide con una o más ocurrencias del elemento anterior.
   - `?` Coincide con cero o una ocurrencia del elemento anterior.
   - `^` Coincide con el inicio de una línea.
   - `$` Coincide con el final de una línea.
   - `[]` Coincide con cualquier carácter dentro de los corchetes.
   - `|` Operador OR, coincide con el patrón antes o después del `|`.
   - `()` Agrupa múltiples tokens juntos y recuerda el texto coincidente.
   - `\` Escapa un metacaracter para ser utilizado como un literal.

## Ejemplos y Uso

1. **Coincidencia Literal**

   Coincide con los caracteres exactos en el texto.

   ```bash

   grep "abc" archivo.txt
   ```

   > Este comando busca la cadena `abc`.

2. **Punto `.`**

   Coincide con cualquier carácter excepto un salto de línea.

   ```bash

   grep "a.c" archivo.txt
   ```

   > Este comando coincide con `abc`, `a1c`, `a-c`, etc.

3. **Asterisco `*`**

   Coincide con cero o más ocurrencias del elemento anterior.

   ```bash

   grep "ab*c" archivo.txt
   ```

   > Este comando coincide con `ac`, `abc`, `abbc`, `abbbc`, etc.

4. **Más `+`**

   Coincide con una o más ocurrencias del elemento anterior.

   ```bash

   grep "ab+c" archivo.txt
   ```

   > Este comando coincide con `abc`, `abbc`, `abbbc`, etc. Pero no con `ac`.

5. **Signo de Interrogación `?`**

   Coincide con cero o una ocurrencia del elemento anterior.

   ```bash

   grep "ab?c" archivo.txt
   ```

   > Este comando coincide con `ac` y `abc`.

6. **Caret `^`**

   Coincide con el inicio de una línea.

   ```bash

   grep "^abc" archivo.txt
   ```

   > Este comando coincide con cualquier línea que comience con `abc`.

7. **Signo de Dólar `$`**

   Coincide con el final de una línea.

   ```bash

   grep "abc$" archivo.txt
   ```

   > Este comando coincide con cualquier línea que termine con `abc`.

8. **Corchetes `[]`**

   Coincide con cualquier carácter dentro de los corchetes.

   ```bash

   grep "[aeiou]" archivo.txt
   ```

   > Este comando coincide con cualquier línea que contenga una vocal `a`, `e`, `i`, `o`, `u`.

9. **Negación dentro de Corchetes `[^]`**

   Coincide con cualquier carácter que no esté dentro de los corchetes.

   ```bash

   grep "[^aeiou]" archivo.txt
   ```

   > Este comando coincide con cualquier línea que contenga un carácter que no sea una vocal.

10. **OR `|`**

    Coincide con el patrón antes o después del `|`.

    ```bash

    grep "abc\|def" archivo.txt
    ```

    > Este comando coincide con líneas que contengan `abc` o `def`.

11. **Agrupación `()`**

    Agrupa múltiples tokens juntos y recuerda el texto coincidente.

    ```bash

    grep "\(abc\)\{2,\}" archivo.txt
    ```

    > Este comando coincide con líneas que contengan `abcabc`.

12. **Escape `\`**

    Escapa un metacaracter para ser utilizado como un literal.

    ```bash

    grep "a\.c" archivo.txt
    ```

    > Este comando coincide con `a.c` en `archivo.txt`.

### Ejemplos Avanzados

1. **Coincidiendo con Límites de Palabras**

   Usa `\b` para coincidir con límites de palabras.

   ```bash

   grep "\bword\b" archivo.txt
   ```

   > Este comando coincide con la palabra `word` como una palabra completa.

2. **Coincidiendo con Dígitos**

   Usa `\d` para coincidir con cualquier dígito.

   ```bash

   grep "\d" archivo.txt
   ```

   > Este comando coincide con cualquier dígito `0-9`.

3. **Coincidiendo con No-Dígitos**

   Usa `\D` para coincidir con cualquier no-dígito.

   ```bash

   grep "\D" archivo.txt
   ```

   > Este comando coincide con cualquier `no-dígito`.

4. **Coincidiendo con Espacios en Blanco**

   Usa `\s` para coincidir con cualquier carácter de espacio en blanco.

   ```bash

   grep "\s" archivo.txt
   ```

   > Este comando coincide con cualquier carácter de espacio en blanco `espacio`, `tabulación`, etc.

5. **Coincidiendo con No-Espacios en Blanco**

   Usa `\S` para coincidir con cualquier carácter que no sea espacio en blanco.

   ```bash

   grep "\S" archivo.txt
   ```

   > Este comando coincide con cualquier carácter que no sea `espacio en blanco`.

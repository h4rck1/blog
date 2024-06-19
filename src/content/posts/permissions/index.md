---
title: Permisos
published: 2024-06-17
description: "Los permisos de Linux bien explicados."
image: "./cover.png"
imageWidth: "w-3/5"
tags: [Fundamentals, Permissions]
category: Linux
isSpanish: true
---

En Linux, los permisos de archivos determinan quién puede leer, escribir o ejecutar un archivo. Estos permisos están representados por los caracteres **`r`**, **`w`** y **`x`**:

1. **`r`** (read): Permiso para leer el archivo.
2. **`w`** (write): Permiso para modificar el archivo.
3. **`x`** (execute): Permiso para ejecutar el archivo como un programa.

### Estructura de Permisos: `usuario`, `grupo`, `otros`

Los permisos de archivos se dividen en tres conjuntos de tres caracteres, cada conjunto representa una categoría diferente de usuarios:

1. **Usuario**: El usuario que posee el archivo.
2. **Grupo**: El grupo que posee el archivo.
3. **Otros**: Todos los demás usuarios.

Por ejemplo, la cadena de permisos `rwxr-xr--` se puede desglosar de la siguiente manera:

1. **Usuario**: `rwx` (leer, escribir, ejecutar)
2. **Grupo**: `r-x` (leer, ejecutar)
3. **Otros**: `r--` (solo leer)

### Representación Binaria y Octal de Permisos

Cada carácter de permiso puede ser representado como un bit en binario, y cada conjunto de permisos puede ser representado como un número octal (base-8).

| Permiso | Binario | Octal |
| ------- | ------- | ----- |
| ---     | 000     | 0     |
| --x     | 001     | 1     |
| -w-     | 010     | 2     |
| -wx     | 011     | 3     |
| r--     | 100     | 4     |
| r-x     | 101     | 5     |
| rw-     | 110     | 6     |
| rwx     | 111     | 7     |

Así, `rwxr-xr--` en binario es:

1. **Usuario**: `rwx` = 111 = 7
2. **Grupo**: `r-x` = 101 = 5
3. **Otros**: `r--` = 100 = 4

Y en octal, `rwxr-xr--` se representa como `754`.

## Modificación de Permisos

### Usando Letras (Modo Simbólico)

**Agregar permiso:**

- Agregar permiso de ejecución para el usuario:

  ```bash
  chmod u+x archivo.txt
  ```

- Agregar permiso de escritura para el grupo:

  ```bash

  chmod g+w archivo.txt

  ```

- Agregar permiso de lectura para otros:

  ```bash

  chmod o+r archivo.txt

  ```

**Quitar permiso:**

- Quitar permiso de ejecución para el usuario:

  ```bash

  chmod u-x archivo.txt

  ```

- Quitar permiso de escritura para el grupo:

  ```bash

  chmod g-w archivo.txt

  ```

- Quitar permiso de lectura para otros:

  ```bash

  chmod o-r archivo.txt

  ```

**Cambiar permiso:**

- Establecer permisos de lectura y escritura para el usuario, quitar todos los permisos para el grupo y establecer permiso de lectura para otros:

  ```bash

  chmod u=rw,g=,o=r archivo.txt

  ```

### Usando Números (Modo Octal)

- Establecer **todos** los permisos para el **usuario**, **lectura** y **ejecución** para el **grupo** y **lectura** y **ejecución** para **otros**:

  ```bash

  chmod 755 archivo.txt

  ```

- Establecer **lectura** y **escritura** para el usuario, quitar **todos** los permisos para el **grupo** y establecer permiso de **lectura** para **otros**:

  ```bash

  chmod 604 archivo.txt

  ```

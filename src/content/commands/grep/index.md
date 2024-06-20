---
title: "Grep"
description: "An advanced guide about grep command in linux"
published: 2024-06-14
author: "h4rck1"
category: Linux
tags: ["linux", "command"]
isSpanish: true
---

```bash

# Puedes usarlo así
grep [opciones] [patrón] [archivo]

# O con pipe (|)
cat [archivo] | grep [opciones] [patrón]
```

- **opciones**: Modifican el comportamiento del filtro.
- **patrón**: El texto o expresión regular que quieres buscar.
- **archivo**: Los archivos en los que quieres buscar. Si no se especifica, grep busca en la entrada estándar.

### Opciones principales de `grep`

### `-i`

Ignora mayúsculas y minúsculas al buscar.

```bash

grep -i "patrón" archivo.txt
```

### **`-v`**

Invierte la coincidencia, mostrando líneas que no contienen el patrón.

```bash

grep -v "patrón" archivo.txt
```

### **`-r`**

Busca recursivamente en directorios.

```bash

grep -r "patrón" directorio/
```

### **`-w`**

Busca palabras completas.

```bash

grep -w "patrón" archivo.txt
```

### **`-E`**

Utiliza expresiones regulares extendidas.

```bash

grep -E "patrón|another" archivo.txt
```

### **`-e`**

Permite especificar múltiples patrones.

```bash

grep -e "patrón1" -e "patrón2" archivo.txt
```

### **`-n`**

Muestra los números de línea junto con las líneas que coinciden.

```bash

grep -n "patrón" archivo.txt
```

### **`-c`**

Muestra solo el conteo de líneas que coinciden.

```bash

grep -c "patrón" archivo.txt
```

### **`-o`**

Muestra solo las partes de las líneas que coinciden.

```bash

grep -o "patrón" archivo.txt
```

### **`-H`**

Muestra el nombre del archivo con las líneas que coinciden. Útil al buscar en múltiples archivos.

```bash

grep -H "patrón" file1.txt file2.txt
```

### **`-h`**

No muestra los nombres de los archivos en la salida. Útil al buscar en múltiples archivos.

```bash

grep -h "patrón" file1.txt file2.txt
```

### **`-f`**

Toma patrones de un archivo.

```bash

grep -f patróns.txt archivo.txt
```

### **`-x`**

Coincide líneas enteras exactamente con el patrón.

```bash

grep -x "patrón" archivo.txt
```

### **`-color`**

Resalta el patrón que coincide en la salida.

```bash

grep --color "patrón" archivo.txt
```

## [NUM] Context

### **`-A [NUM]`**

Muestra el [NUM] líneas después de cada línea que coincide.

```bash

grep -A 3 "patrón" archivo.txt
```

### **`-B [NUM]`**

Muestra el [NUM] líneas antes de cada línea que coincide.

```bash

grep -B 3 "patrón" archivo.txt
```

### **`-C [NUM]`**

Muestra el [NUM] líneas antes y después de cada línea que coincide.

```bash

grep -C 3 "patrón" archivo.txt
```

## Comparación de archivos

### **`-l`**

Muestra solo los nombres de los archivos que contienen el patrón.

```bash

grep -l "patrón" file1.txt file2.txt
```

### **`-L`**

Muestra solo los nombres de los archivos que no contienen el patrón.

```bash

grep -L "patrón" file1.txt file2.txt
```

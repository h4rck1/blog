---
title: "Awk"
description: "Una guía avanzada del comando awk en Linux"
published: 2024-06-14
author: "h4rck1"
category: Linux
tags: ["linux", "command"]
isSpanish: true
---

```bash

awk 'patrón {acción}' [archivo]
```

- **patrón**: La condición a cumplir.
- **acción**: La operación a realizar cuando el patrón coincide.
- **archivo**: Los archivos en los que quieres buscar.

### Variables

- **`$0`** Representa toda la línea actual.
- **`$1, $2, ...`**: Representa el primer, segundo, etc., campos en la línea actual.
- **`NF`** Número de campos en el registro actual.
- **`NR`** Número del registro actual (número de línea).
- **`FS`** Separador de campos (por defecto es espacio o tabulación).
- **`OFS`** Separador de campos de salida.
- **`RS`** Separador de registros (por defecto es nueva línea).
- **`ORS`** Separador de registros de salida.

### Imprimir columnas específicas

Usa `awk` para extraer campos o columnas específicas de archivos de texto, como archivos de registro o salidas de comandos.

```bash

awk '{print $1, $3, $NF}' archivo.txt
```

### Imprimir líneas donde el último campo coincide con un patrón

Para imprimir líneas donde el último campo coincide con un patrón específico.

```bash

awk '$NF ~ /patrón/' archivo.txt
```

### Imprimir el penúltimo campo

Para imprimir el penúltimo campo de cada línea, puedes usar `$(NF-1)`.

```bash

awk '{print $(NF-1)}' archivo.txt
```

### Filtrar filas basadas en una condición

`awk` se puede usar para filtrar filas que cumplen ciertas condiciones, como filas que contienen texto específico.

```bash

awk '/patrón/ {print $0}' archivo.txt
```

### Procesar Archivos de Registro

Usa `awk` para procesar archivos de registro y extraer información significativa.

```bash

awk '$3 == "ERROR" {print $0}' logarchivo.txt
```

> Este comando imprime todas las líneas donde la tercera columna es "ERROR".

### Calcular estadísticas

`awk` puede realizar cálculos, lo que lo hace útil para generar estadísticas a partir de datos.

```bash

awk '{sum += $1} END {print sum}' numberos.txt
```

> Este comando suma los valores en la primera columna de `numeros.txt` e imprime el total.

## Usos menos comunes pero muy útiles

### Reemplazar texto en un archivo

`awk` se puede usar para reemplazar texto en un archivo.

```bash

awk '{gsub(/texto_antiguo/, "texto_nuevo"); print}' archivo.txt
```

> Este comando reemplaza todas las ocurrencias de "texto_antiguo" con "texto_nuevo" en `archivo.txt`.

### Separador de campos

`awk` puede manejar diferentes separadores de campos, no solo espacios o tabulaciones.

```bash

awk -F',' '{print $1, $2}' archivo.csv
```

> Este comando usa una coma como separador de campos e imprime la primera y segunda columnas de un archivo CSV.

### Declaraciones condicionales complejas

`awk` puede usar declaraciones condicionales complejas para un procesamiento de datos más sofisticado.

```bash

awk '{if ($1 > 100 && $2 < 50) print $0}' archivo.txt
```

> Este comando imprime líneas donde la primera columna es mayor que 100 y la segunda columna es menor que 50.

### Salida con formato

`awk` puede formatear la salida de manera estructurada.

```bash

awk '{printf "Nombre: %s, Edad: %d\n", $1, $2}' archivo.txt
```

> Este comando imprime la primera y segunda columnas de manera formateada.

### Trabajar con Arreglos

`awk` soporta arreglos, lo cual puede ser útil para un procesamiento de texto más avanzado.

```bash

awk '{arr[$1]++} END {for (i in arr) print i, arr[i]}' archivo.txt
```

> Este comando cuenta las ocurrencias de cada valor único en la primera columna e imprime los resultados.

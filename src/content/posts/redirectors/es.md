---
title: Redirectores
published: 2024-06-18
description: "¿Cómo funcionan los Redirectores?"
image: "./cover.png"
tags: [Fundamentals, Redirectors]
category: Linux
isSpanish: true
---

En el contexto de la programación y los sistemas operativos, "STD" significa "Standard".<br/>
Se utiliza comúnmente para referirse a los flujos de datos estándar en sistemas Unix o Linux.

### Flujos de Datos Estándar

1. **`STDIN` Entrada Estándar**

   - **Código**: `0`
   - **Descripción**: El flujo de datos de entrada predeterminado para comandos y programas. Por defecto, `STDIN` es el teclado, lo que significa que cuando un programa espera entrada, la recibe del teclado a menos que se redirija desde un archivo u otro flujo.

2. **`STDOUT` Salida Estándar**

   - **Código**: `1`
   - **Descripción**: El flujo de datos de salida predeterminado para comandos y programas. Por defecto, `STDOUT` es la pantalla o terminal. Cuando un programa genera salida, se muestra en la pantalla a menos que se redirija a un archivo u otro dispositivo.

3. **`STDERR` Error Estándar**
   - **Código**: `2`
   - **Descripción**: El flujo de datos de error predeterminado para comandos y programas. Al igual que `STDOUT`, por defecto, `STDERR` es la pantalla o terminal. La diferencia es que `STDERR` se utiliza específicamente para mensajes de error, separándolos de la salida normal `STDOUT`.

## Operadores de Redirección

### `>` Redirigiendo la Salida Estándar

Redirige la salida estándar de un comando a un archivo. Si el archivo existe, se sobrescribe.

```bash
ls > lista.txt
```

> Este comando guarda la salida del comando `ls` en el archivo `lista.txt`.

### `>>` Añadiendo la Salida Estándar

Redirige la salida estándar de un comando a un archivo, añadiendo la salida al final del archivo si ya existe.

```bash
echo "Nueva línea" >> lista.txt
```

> Este comando añade "Nueva línea" al final del archivo `lista.txt`.

### `2>` Redirigiendo el Error Estándar

Redirige la salida de error estándar de un comando a un archivo.

```bash
ls archivo_que_no_existe 2> errorlog.txt
```

> Este comando guarda el mensaje de error generado al intentar listar un archivo inexistente en `errorlog.txt`.

### `&>` Redirigiendo Tanto la Salida Estándar como el Error

Redirige tanto la salida estándar como la salida de error estándar a un archivo.

```bash
ls archivo_que_si_existe archivo_que_no_existe &> outputlog.txt
```

> Este comando guarda tanto la lista de un archivo existente como el mensaje de error de un archivo inexistente en `outputlog.txt`.

### `<` Redirigiendo la Entrada Estándar

Redirige la entrada estándar de un comando desde un archivo.

```bash
wc -l < lista.txt
```

> Este comando cuenta las líneas en `lista.txt` usando la entrada redirigida.

### Redirigiendo la Salida Estándar y el Error Estándar por Separado

```bash
ls archivo_que_si_existe archivo_que_no_existe > output.txt 2> error.txt
```

> Este comando guarda la lista de un archivo existente en `output.txt` y el mensaje de error de un archivo inexistente en `error.txt`.

### Redirigiendo la Salida Estándar y el Error Estándar al Mismo Archivo

```bash
ls archivo_que_si_existe archivo_que_no_existe > todos_los_errores.txt 2>&1
```

> Este comando guarda tanto la salida estándar como la salida de error en `todos_los_errores`.

### Usando Pipes con Redirección

Combinando pipes `|` con redirección para procesar datos entre múltiples comandos.

```bash
ls | grep "patrón" > resultado.txt
```

> Este comando lista los archivos y filtra aquellos que coinciden con "patrón", guardando el resultado en `resultado.txt`.

### Leyendo desde un Archivo y Redirigiendo la Salida

```bash
sort < lista_desordenada.txt > lista_ordenada.txt
```

> Este comando lee desde `lista_desordenada.txt`, ordena el contenido y guarda la salida en `lista_ordenada.txt`.

### Redirigiendo STDERR a STDOUT

```bash
command 2>&1 | tee output_y_error.txt
```

> Este comando combina la salida de error con la salida estándar, pasándola a través de `tee` para mostrarla en la pantalla y guardarla en `output_y_error.txt`.

## Ejemplos Avanzados

### Ignorando el Error Estándar

Redirige la salida de error a `/dev/null` para ignorarla.

```bash
ls archivo_que_no_existe 2> /dev/null
```

> Este comando intenta listar un archivo inexistente, pero el mensaje de error no se muestra ni se guarda.

### Combinando Múltiples Comandos con Diferentes Redirecciones

```bash
command1 > output.txt 2>&1 | command2 2> solo_errores.txt
```

> Este ejemplo muestra cómo puedes redirigir la salida de un comando, combinando la salida estándar y de error en `output.txt`, y luego pasarla a otro comando mientras solo se guardan los errores del segundo comando en `solo_errores.txt`.

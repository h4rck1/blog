---
title: "Find"
description: "An advanced guide about find command in linux"
published: 2024-06-14
author: "h4rck1"
category: Linux
tags: ["linux", "command"]
isSpanish: true
---

```bash
find [ruta] [opciones] [expresión]
```

- **ruta**: Especifica la ruta donde comienza la búsqueda. Si no se proporciona, se usa el directorio actual.
- **opciones**: Modifican el comportamiento de la búsqueda.
- **expresión**: Define los criterios de búsqueda (por nombre, tipo, tamaño, etc.).

### Opciones principales de `find`

### **`-name`**

Busca archivos y directorios por nombre.

```bash

find /ruta -name "archivo.txt"

```

### **`-iname`**

Busca archivos y directorios por nombre, sin distinguir entre mayúsculas y minúsculas.

```bash

find /ruta -iname "archivo.txt"

```

### **`-type`**

Busca por tipo de archivo. Tipos comunes incluyen:

- `f` Archivo regular
- `d` Directorio
- `l` Enlace simbólico

```bash

find /ruta -type f
find /ruta -type d
find /ruta -type l

```

### **`-size`**

Busca archivos por tamaño. Los tamaños se pueden especificar en:

- `c` bytes
- `k` kilobytes
- `M` megabytes
- `G` gigabytes

```bash

find /ruta -size +10M  # Archivos mayores a 10 MB
find /ruta -size -1G   # Archivos menores a 1 GB

```

### **`-user`**

Busca archivos y directorios propiedad de un usuario específico.

```bash

find /ruta -user nombre_usuario

```

### **`-group`**

Busca archivos y directorios pertenecientes a un grupo específico.

```bash

find /ruta -group nombre_grupo

```

### **`-perm`**

Busca archivos y directorios con permisos específicos.

```bash

find /ruta -perm 755  # Archivos con permisos 755
find /ruta -perm /u+w # Archivos con permiso de escritura para el usuario

```

### **`-mtime` ,`-atime`, `-ctime`**

Busca archivos basándose en la fecha de modificación, acceso o cambio de estado.

- `mtime` Fecha de modificación del contenido.
- `atime` Fecha de acceso.
- `ctime` Fecha de cambio de metadatos.

```bash

find /ruta -mtime -1  # Archivos modificados en las últimas 24 horas
find /ruta -atime +7  # Archivos accedidos hace más de 7 días

```

### **`exec`**

Ejecuta un comando sobre los archivos encontrados.

```bash

find /ruta -name "*.log" -exec rm {} \;  # Elimina los archivos .log encontrados

```

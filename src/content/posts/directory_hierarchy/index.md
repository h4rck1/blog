---
title: Árbol de Directorios
published: 2024-06-14
description: "Una breve descripción de la estructura jerárquica multinivel en Unix."
image: "./cover.png"
tags: [Fundamentals, Hierarchy]
category: Linux
isSpanish: true
---

### **`/` (Directorio Raíz)**

El directorio de nivel superior del sistema de archivos. Todos los demás directorios son subdirectorios del directorio raíz.

- **Archivos**: Contiene directorios del sistema como `bin`, `etc`, `home`, `lib`, `usr`, etc.

### **`/bin` (Binarios)**

Contiene ejecutables binarios esenciales.

- **Archivos**: Binarios del sistema necesarios para la funcionalidad básica.
- **Ejemplos**: `ls`, `cp`, `mv`, `bash`.

### **`/boot`**

Contiene los archivos necesarios para arrancar el sistema.

- **Nombre**: "boot" proviene del proceso de bootstrapping, que es la carga del sistema operativo.
- **Archivos**: Imágenes del kernel, archivos del cargador de arranque.
- **Ejemplos**: `vmlinuz`, `initrd.img`, `grub`.

### **`/dev` (Dispositivos)**

Contiene archivos de dispositivos.

- **Archivos**: Archivos especiales que representan dispositivos de hardware.
- **Ejemplos**: `sda`, `tty`, `null`.

### **`/etc` (Etcétera)**

Contiene archivos de configuración.

- **Nombre**: "etc" originalmente significaba etcétera, un lugar para almacenar archivos de configuración.
- **Archivos**: Archivos de configuración del sistema.
- **Ejemplos**: `fstab`, `hosts`, `passwd`.

### **`/home`**

Contiene los directorios de inicio de los usuarios.

- **Nombre**: "home" representa los directorios de inicio de los usuarios.
- **Archivos**: Archivos personales y directorios para cada usuario.
- **Ejemplos**: `/home/user1`, `/home/user2`, `Documents`, `Downloads`.

### **`/lib` (Bibliotecas)**

Contiene archivos de bibliotecas compartidas.

- **Archivos**: Bibliotecas compartidas esenciales y módulos del kernel.
- **Ejemplos**: `libc.so.6`, `ld-linux.so.2`.

### **`/media`**

Punto de montaje para medios removibles.

- **Nombre**: "media" indica dispositivos de medios como CD-ROM, unidades USB.
- **Archivos**: Puntos de montaje para medios removibles.
- **Ejemplos**: `/media/cdrom`, `/media/usb`.

### **`/mnt` (Montaje)**

Sistemas de archivos montados temporalmente.

- **Archivos**: Puntos de montaje para montajes temporales por el administrador del sistema.
- **Ejemplos**: `/mnt/disk`, `/mnt/backup`.

### **`/opt` (Opcional)**

Contiene paquetes de software adicionales.

- **Archivos**: Software opcional y aplicaciones de terceros.
- **Ejemplos**: `/opt/vmware`, `/opt/google`.

### **`/proc` (Proceso)**

Sistema de archivos virtual que proporciona información sobre procesos y el kernel.

- **Archivos**: Contiene información sobre los procesos en ejecución.
- **Ejemplos**: `/proc/cpuinfo`, `/proc/meminfo`.

### **`/root`**

Directorio de inicio para el usuario root.

- **Archivos**: Archivos personales y de configuración para el usuario root.
- **Ejemplos**: `/root/.bashrc`, `/root/.profile`.

### **`/run`**

Contiene datos en tiempo de ejecución para los procesos.

- **Origen del Nombre**: "run" indica datos en tiempo de ejecución.
- **Archivos**: Archivos como identificadores de procesos y sockets.
- **Ejemplos**: `/run/sshd.pid`, `/run/utmp`.

### **`/sbin` (Binarios del Sistema)**

Contiene binarios esenciales del sistema.

- **Archivos**: Binarios del sistema para la administración del sistema.
- **Ejemplos**: `ifconfig`, `reboot`, `shutdown`.

### **`/srv` (Servicio)**

Contiene datos para los servicios proporcionados por el sistema.

- **Archivos**: Datos para servicios como servidores web.
- **Ejemplos**: `/srv/www`, `/srv/ftp`.

### **`/sys` (Sistema)**

Sistema de archivos virtual que proporciona información del sistema.

- **Archivos**: Contiene información sobre dispositivos, controladores y kernels.
- **Ejemplos**: `/sys/class`, `/sys/block`.

### **`/tmp` (Temporal)**

Contiene archivos temporales.

- **Archivos**: Archivos temporales que se pueden eliminar.
- **Ejemplos**: Archivos de sesión temporales, cachés.

### **`/usr` (Usuario)**

Contiene binarios de usuario y datos de solo lectura.

- **Archivos**: Jerarquía secundaria para programas y datos de usuario.
- **Ejemplos**: `/usr/bin`, `/usr/lib`, `/usr/share`.

### **`/var` (Variable)**

Contiene archivos de datos variables.

- **Archivos**: Archivos que se espera que crezcan, como registros, archivos de spool y cachés.
- **Ejemplos**: `/var/log`, `/var/spool`, `/var/cache`.

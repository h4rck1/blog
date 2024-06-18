---
title: Directory Hierarchy
published: 2024-06-14
description: "This is a desc"
image: "./cover.png"
tags: [Hierarchy]
category: Linux
draft: false
---

### **`/` (Root Directory)**

 The top-level directory of the filesystem. All other directories are subdirectories of the root directory.

- **Files**: Contains system directories like `bin`, `etc`, `home`, `lib`, `usr`, etc.

### **`/bin` (Binaries)**

Contains essential binary executables.

- **Files**: System binaries needed for basic functionality.
- **Examples**: `ls`, `cp`, `mv`, `bash`.

### **`/boot`**

Contains the files needed to boot the system.

- **Name**: "boot" comes from the process of bootstrapping, which is loading the operating system.
- **Files**: Kernel images, bootloader files.
- **Examples**: `vmlinuz`, `initrd.img`, `grub`.

### **`/dev` (Devices)**

Contains device files.

- **Files**: Special files that represent hardware devices.
- **Examples**: `sda`, `tty`, `null`.

### **`/etc` (Etcetera)**

 Contains configuration files.

- **Name**: "etc" originally stood for etcetera, a place to store configuration files.
- **Files**: System-wide configuration files.
- **Examples**: `fstab`, `hosts`, `passwd`.

### **`/home`**

Contains user home directories.

- **Name**: "home" represents user home directories.
- **Files**: Personal files and directories for each user.
- **Examples**: `/home/user1`, `/home/user2`, `Documents`, `Downloads`.

### **`/lib` (Libraries)**

Contains shared library files.

- **Files**: Essential shared libraries and kernel modules.
- **Examples**: `libc.so.6`, `ld-linux.so.2`.

### **`/media`**

Mount point for removable media.

- **Name**: "media" indicates media devices like CD-ROMs, USB drives.
- **Files**: Mount points for removable media.
- **Examples**: `/media/cdrom`, `/media/usb`.

### **`/mnt` (Mount)**

Temporarily mounted filesystems.

- **Files**: Mount points for temporary mounts by the system administrator.
- **Examples**: `/mnt/disk`, `/mnt/backup`.

### **`/opt` (Optional)**

Contains add-on application software packages.

- **Files**: Optional software and third-party applications.
- **Examples**: `/opt/vmware`, `/opt/google`.

### **`/proc` (Process)**

Virtual filesystem providing process and kernel information.

- **Files**: Contains information about running processes.
- **Examples**: `/proc/cpuinfo`, `/proc/meminfo`.

### **`/root`**

Home directory for the root user.

- **Files**: Personal files and configuration files for the root user.
- **Examples**: `/root/.bashrc`, `/root/.profile`.

### **`/run`**

Contains runtime data for processes.

- **Name Origin**: "run" indicates runtime data.
- **Files**: Files like process IDs and sockets.
- **Examples**: `/run/sshd.pid`, `/run/utmp`.

### **`/sbin` (System Binaries)**

Contains essential system binaries.

- **Files**: System binaries for system administration.
- **Examples**: `ifconfig`, `reboot`, `shutdown`.

### **`/srv` (Service)**

Contains data for services provided by the system.

- **Files**: Data for services like web servers.
- **Examples**: `/srv/www`, `/srv/ftp`.

### **`/sys` (System)**

Virtual filesystem providing system information.

- **Files**: Contains information about devices, drivers, and kernels.
- **Examples**: `/sys/class`, `/sys/block`.

### **`/tmp` (Temporary)**

Contains temporary files.

- **Files**: Temporary files that can be deleted.
- **Examples**: Temporary session files, caches.

### **`/usr` (User)**

Contains user binaries and read-only data.

- **Files**: Secondary hierarchy for user programs and data.
- **Examples**: `/usr/bin`, `/usr/lib`, `/usr/share`.

### **`/var` (Variable)**

Contains variable data files.

- **Files**: Files that are expected to grow, such as logs, spool files, and caches.
- **Examples**: `/var/log`, `/var/spool`, `/var/cache`.
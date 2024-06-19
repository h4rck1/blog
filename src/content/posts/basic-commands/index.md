---
title: Comandos Básicos de Linux
published: 2024-06-14
description: Comandos básicos de Linux que deberías saber.
tags: [Fundamentals, Commands]
category: Linux
isSpanish: true
---

## Navegación y Gestión de Directorios

<table>
    <tr>
        <th>Comando</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td><code>cd</code></td>
        <td>
            Cambia el directorio actual.
        </td>
    </tr>
    <tr>
        <td><code>ls</code></td>
        <td>
            Muestra todos los detalles del contenido de un directorio o archivo. </br>
            <code>-a</code> Mostrar archivos ocultos (archivos con punto)</br>
            <code>-l</code> Lista legible</br>
            <code>-i</code> Mostrar índice
        </td>
    </tr>
    <tr>
        <td><code>pwd</code></td>
        <td>
            Muestra el directorio actual.
        </td>
    </tr>
    <tr>
        <td><code>mkdir</code></td>
        <td>
            Crea un directorio.
        </td>
    </tr>
    <tr>
        <td><code>mktemp</code></td>
        <td>
            Crea un archivo o directorio temporal. </br>
            <code>-d</code> Crear directorios
        </td>
    </tr>
    <tr>
        <td><code>tree</code></td>
        <td>
            Muestra la estructura de directorios y archivos en formato de árbol.
        </td>
    </tr>
</table>

## Gestión de Archivos

<table>
    <tr>
        <th>Comando</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td><code>touch</code></td>
        <td>
            Crea un nuevo archivo.
        </td>
    </tr>
    <tr>
        <td><code>cp</code></td>
        <td>
            Copia un archivo.
        </td>
    </tr>
    <tr>
        <td><code>mv</code></td>
        <td>
            Mueve o renombra un archivo.
        </td>
    </tr>
    <tr>
        <td><code>rm</code></td>
        <td>
            Elimina archivos o directorios</br>
            <code>-r</code> Eliminar directorio de forma recursiva.
        </td>
    </tr>
    <tr>
        <td><code>ln</code></td>
        <td>
            Crea enlaces duros y simbólicos entre archivos.
        </td>
    </tr>
    <tr>
        <td><code>head</code></td>
        <td>
            Muestra las primeras líneas de un archivo.
        </td>
    </tr>
    <tr>
        <td><code>tail</code></td>
        <td>
            Muestra las últimas líneas de un archivo.
        </td>
    </tr>
    <tr>
        <td><code>df</code></td>
        <td>
            Muestra el uso del espacio en disco de los sistemas de archivos.
        </td>
    </tr>
    <tr>
        <td><code>du</code></td>
        <td>
            Muestra el uso del espacio en disco de archivos y directorios.
        </td>
    </tr>
</table>

## Edición y Visualización de Archivos

<table>
    <tr>
        <th>Comando</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td><code>cat</code></td>
        <td>
            Muestra el contenido de un archivo.
        </td>
    </tr>
    <tr>
        <td><code>nano</code></td>
        <td>
            Abre un archivo con un editor de texto básico.
        </td>
    </tr>
    <tr>
        <td><code>less</code></td>
        <td>
            Muestra el contenido de un archivo con paginación.
        </td>
    </tr>
    <tr>
        <td><code>more</code></td>
        <td>
            Similar a less, muestra el contenido de un archivo con paginación.
        </td>
    </tr>
    <tr>
        <td><code>echo</code></td>
        <td>
            Imprime en la terminal.
        </td>
    </tr>
</table>

## Permisos y Propiedad

<table>
    <tr>
        <th>Comando</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td><code>chmod</code></td>
        <td>
            Cambia los permisos de un archivo.
        </td>
    </tr>
    <tr>
        <td><code>chown</code></td>
        <td>
            Cambia el propietario de un archivo.
        </td>
    </tr>
    <tr>
        <td><code>umask</code></td>
        <td>
            Establece la máscara de permisos de creación de archivos por defecto.
        </td>
    </tr>
</table>

## Búsqueda y Localización

<table>
    <tr>
        <th>Comando</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td><code>find</code></td>
        <td>
            Encuentra algo en una ruta.
        </td>
    </tr>
    <tr>
        <td><code>locate</code></td>
        <td>
            Encuentra algo a través de la base de datos.
        </td>
    </tr>
    <tr>
        <td><code>updatedb</code></td>
        <td>
            Actualiza la base de datos local para locate.
        </td>
    </tr>
    <tr>
        <td><code>which</code></td>
        <td>
            Muestra la ruta completa de un comando.
        </td>
    </tr>
</table>

## Información del Sistema y del Usuario

<table>
    <tr>
        <th>Comando</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td><code>id</code></td>
        <td>
            Muestra el ID del usuario y todos los grupos a los que pertenece.
        </td>
    </tr>
    <tr>
        <td><code>uname</code></td>
        <td>
            Muestra información de la máquina.
        </td>
    </tr>
    <tr>
        <td><code>whoami</code></td>
        <td>
            Muestra el usuario actual.
        </td>
    </tr>
    <tr>
        <td><code>date</code></td>
        <td>
            Muestra la fecha y hora actual.
        </td>
    </tr>
    <tr>
        <td><code>uptime</code></td>
        <td>
            Muestra cuánto tiempo ha estado en funcionamiento el sistema.
        </td>
    </tr>
    <tr>
        <td><code>hostname</code></td>
        <td>
            Muestra o establece el nombre de host del sistema.
        </td>
    </tr>
</table>

## Gestión de Procesos y Administración

<table>
    <tr>
        <th>Comando</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td><code>ps</code></td>
        <td>
            Muestra los procesos en ejecución.
        </td>
    </tr>
    <tr>
        <td><code>top</code></td>
        <td>
            Muestra una lista en tiempo real de los procesos en ejecución.
        </td>
    </tr>
    <tr>
        <td><code>htop</code></td>
        <td>
            Similar a top, pero con una interfaz interactiva y fácil de usar.
        </td>
    </tr>
    <tr>
        <td><code>kill</code></td>
        <td>
            Mata un proceso en ejecución.
        </td>
    </tr>
</table>

## Comandos de Red

<table>
    <tr>
        <th>Comando</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td><code>ifconfig</code></td>
        <td>
            Muestra las interfaces de red y las direcciones IP.
        </td>
    </tr>
</table>

## Otros

<table>
    <tr>
        <th>Comando</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td><code>awk</code></td>
        <td>
            Realiza diferentes operaciones con texto.
        </td>
    </tr>
    <tr>
        <td><code>grep</code></td>
        <td>
            Filtra resultados.
        </td>
    </tr>
    <tr>
        <td><code>xargs</code></td>
        <td>
            Captura la salida.
        </td>
    </tr>
    <tr>
        <td><code>alias</code></td>
        <td>
            Crea alias de comandos.
        </td>
    </tr>
    <tr>
        <td><code>history</code></td>
        <td>
            Muestra el historial de comandos.
        </td>
    </tr>
    <tr>
        <td><code>clear</code></td>
        <td>
            Limpia la pantalla de la terminal.
        </td>
    </tr>
    <tr>
        <td><code>su</code></td>
        <td>
            Cambia de usuario.
        </td>
    </tr>
    <tr>
        <td><code>man</code></td>
        <td>
            Muestra las páginas del manual de comandos.
        </td>
    </tr>
</table>

# DESARROLLO WEB - PROYECTO 2
## _Web Aplication with ANGULAR (v14), LARAVEL 9 and VPN_

## _GIT SOURCE: https://github.com/camm20/dwproyecto_

### WEB APP
Este proyecto fue desarrollado con las tecnologias antes mencionadas, Angular en el Front-end y Laravel en el Back-end con la finalidad de comprender el desarrollo de Web Apps con microservicios y conocer las ventajas de esta metodología de desarrollo.

### VPN
Se trabajo a traves de una VPN para conectar diversos servicios, en este caso se hace uso de la VPN para conectar una base de datos que se encuentra en otro dispositivo y los clientes tambien hacen uso de dicha VPN para poder consumir la WEB APP, esto con la finalidad de mantener un cifrado en la transmición de los datos.

Esta VPN se implemento en una instancia de AWS EC2 con Ubuntu 22.04, dicha instancia fue configurada como servidor del VPN con OpenVPN.

Para la VPN se trabajo por medio de la siguiente guía la cual esta muy completa y fácil de seguir [OpenVPN - Ubuntu 22.04](https://www.cyberciti.biz/faq/ubuntu-22-04-lts-set-up-openvpn-server-in-5-minutes/)

## Tech

Dillinger uses a number of open source projects to work properly:

- [AngularJS] - HTML enhanced for web apps!
- [Laravel] - PHP para microservicios.
- [OpenVPN] - Servidor y cliente de VPN open source.
- [AWS] - Servicio de servidores VPS.
- [node.js] - Backend de JavaScript.
- [JWT] - JSON WEB TOKEN.

## JWT 'JSON WEB TOKEN'

Se hace uso de JSON WEB TOKEN para el manejo de las sesiones de los usuarios en la aplicación así como la validación para las request que se realizan a las apis de Laravel.

   [Laravel]: <https://laravel.com/>
   [OpenVPN]: <https://openvpn.net/quick-start-guide/>
   [AngularJS]: <http://angularjs.org>
   [AWS]: <https://aws.amazon.com/es/ec2/?nc2=h_ql_prod_fs_ec2>
   [node.js]: <https://nodejs.org/en/>
   [JWT]: <https://jwt.io/>


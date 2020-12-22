# Project-Shopping-Cart

<h2> Sql Setup</h2>
Do the following as root user 

```
$ create database shopdb;
$ create user shopper identified by 'shoppass';
$ use shopdb;
$ grant all privileges on shopdb to shopper;
$ grant all privileges on shopdb.* to shopper;
```

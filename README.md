# express-gateway-plugin-example
Generic plugin example for [Express Gateway](http://www.express-gateway.io/)

It shows all extension points available in the Express Gateway Plugin Engine 1.2.0

### Getting Started in 5 minutes: 

```bash
$ npm -i -g express-gateway
$ eg gateway create

eg gateway create
# follow prompts
? What\'s the name of your Express Gateway? demo
? Where would you like to install your Express Gateway? demo
? What type of Express Gateway do you want to create? Getting Started with Express Gateway

# cd to new directory
$ cd ./demo

# install this plugin
$ eg plugin install example
? Set value for baseUrl: http://example.com
? Set value for maxRequestsPerSecond: 234
? Would you like to enable this plugin in system config? Yes
? Would you like to add new policies to gateway config? Yes
Plugin installed!
```

### Detailed documentation:

[Express Gateway Overview](http://www.express-gateway.io/about/)

Express Gateway plugin explanation:
[Plugin Documentation](http://www.express-gateway.io/docs/plugins/)

CLI for installing and configuring plugin: 
[Plugins CLI](http://localhost:4000/docs/cli/plugins/)

Guidlines how to write your custom plugin:
[Plugin Development Guide](http://www.express-gateway.io/docs/plugins/development-guide)

[Express Gateway Boot Sequence](http://www.express-gateway.io/docs/plugins/boot-sequence) explains order in which plugin entities are loaded and executed. 

/**
 * Built-in Log Configuration
 * (sails.config.log)
 *
 * Configure the log level for your app, as well as the transport
 * (Underneath the covers, Sails uses Winston for logging, which
 * allows for some pretty neat custom transports/adapters for log messages)
 *
 * For more information on the Sails logger, check out:
 * http://sailsjs.org/#!/documentation/concepts/Logging
 */

var winston = require('winston');

var customLogger = new winston.Logger({
  transports: [
    new(winston.transports.File)({
      level: 'debug',
      filename: './logs/application.log'
    }),
    new (winston.transports.Console)({
      level: 'silly',
      colorize: true,
      timestamp: true
    })
//    new (winston.transports.PosixSyslog)({cons: true, identity: config.log.identity, level: config.logLevel, levels: osSyslogConfigLevels })
  ]
});

module.exports.log = {

  /***************************************************************************
  *                                                                          *
  * Valid `level` configs: i.e. the minimum log level to capture with        *
  * sails.log.*()                                                            *
  *                                                                          *
  * The order of precedence for log levels from lowest to highest is:        *
  * silly, verbose, info, debug, warn, error                                 *
  *                                                                          *
  * You may also set the level to "silent" to suppress all logs.             *
  *                                                                          *
  ***************************************************************************/

  colors: false,
  custom: customLogger
};

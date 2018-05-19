/*
 *   This file is part of discord-self-bot
 *   Copyright (C) 2017-2018 Favna
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, version 3 of the License
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const Discord = require('discord.js'),
  {Command} = require('discord.js-commando'),
  {deleteCommandMessages} = require('../../util.js');		

module.exports = class dsiGuideCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'dsiguide',
      memberName: 'dsiguide',
      group: 'links',
      aliases: ['dsi'],
      description: 'A link to a Nintendo DSi Guide',
      guildOnly: false
    });
  }

  run (msg) {
    const dsiGuideEmbed = new Discord.MessageEmbed();

    dsiGuideEmbed
      .setColor(msg.member !== null ? msg.member.displayHexColor : '#FF0000')
      .setTitle('A one stop guide for DSI')
      .setDescription('Dusting off your DSi? Need instructions on how to set up DSi hacks? Follow this guide')
      .addField('\u200b', 'http://cfw.guide/dsi/')
      .setThumbnail('https://silento.s-ul.eu/1RKVHclC');

    deleteCommandMessages(msg, this.client);

    return msg.embed(dsiGuideEmbed, 'http://cfw.guide/dsi/');
  }
};
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

module.exports = class wiiGuideCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'wiiguide',
      memberName: 'wiiguide',
      group: 'links',
      aliases: ['cios', 'letterbomb'],
      description: 'A link to plailect\'s Nintendo Wii Guide',
      guildOnly: false
    });
  }

  run (msg) {
    const wiiGuideEmbed = new Discord.MessageEmbed();

    wiiGuideEmbed
      .setColor(msg.member !== null ? msg.member.displayHexColor : '#FF0000')
      .setTitle('A one stop guide for Wii')
      .setDescription('Want to run game backups on your Wii? Need instructions on how to set up Priiloader, Homebrew Launcher and cios? Follow this guide')
      .addField('\u200b', 'https://wii.guide')
      .setThumbnail('https://silento.s-ul.eu/g9QiwTgG');

    deleteCommandMessages(msg, this.client);

    return msg.embed(wiiGuideEmbed, 'https://wii.guide');
  }
};
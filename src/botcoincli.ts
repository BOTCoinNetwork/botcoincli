#!/usr/bin/env node
import { CLIOptions, init } from 'bvm-cli-bot';
import { osdatadir } from 'evm-lite-datadir';

import {
	// accounts
	accountsCreate,
	accountsGenerate,
	accountsGet,
	accountsImport,
	accountsInspect,
	accountsList,
	accountsUpdate,

	// config
	configSet,
	configView,

	// pos
	info,
	poaCheck,
	poaEvicteeList,
	poaEvicteeNew,
	poaEvicteeVote,
	poaInit,
	poaNomineeList,
	poaNomineeNew,
	poaNomineeVote,
	poaWhitelist,

	// stake
	stake,
	stakeCheck,
	stakeList,
	stakeWithdraw,

	// misc
	
	transfer
} from 'bvm-cli-bot';

// custom commands
import block from './commands/block';
import history from './commands/history';
import validators from './commands/validators';
import version from './commands/version';

const options: CLIOptions = {
	name: 'Botcoin CLI',
	delimiter: 'botcoincli',
	datadir: osdatadir('Monet'),
	config: 'botcoincli'
};

const commands = [
	info,

	configSet,
	configView,

	accountsList,
	accountsGet,
	accountsCreate,
	accountsUpdate,
	accountsImport,
	accountsInspect,
	accountsGenerate,

	transfer,

	poaInit,
	poaWhitelist,
	poaCheck,

	poaNomineeList,
	poaNomineeNew,
	poaNomineeVote,

	poaEvicteeList,
	poaEvicteeNew,
	poaEvicteeVote,

	stake,
	stakeList,
	stakeCheck,
	stakeWithdraw,

	block,
	validators,
	history,

	version
];

init(options, commands).catch(console.log);

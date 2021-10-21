import { expect } from 'chai';
import { Column, LoadCommandLineArgs } from '../index';

@LoadCommandLineArgs()
export class CommandLineArgs {
	@Column()
	static NAME: string = 'rhea'; // Default value is 'rhea'

	@Column()
	static MATH_SCORE: number; // Default value is undefiend
}


describe('Environment Value', () => {
	it('01_Default value', () => {
		expect(CommandLineArgs.NAME).to.be.equal('rhea');
		expect(CommandLineArgs.MATH_SCORE).to.be.equal(undefined);
	});
});
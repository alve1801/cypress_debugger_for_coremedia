function test(site){
	describe('xkcd', function(){it('', function(){
		cy.visit('https://xkcd.com')
		.get('#comic')
		.then(($current) => {debugger})
		.screenshot('the latest')
		})
	})
}

test()

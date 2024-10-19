const Img3 = new Proxy({"src":"/_astro/SobremesaEspiral2.CLdBAOQV.jpg","width":768,"height":466,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Jordi/Documents/web/calendaris/src/assets/images/mesa/SobremesaEspiral2.jpg";
							}
							
							return target[name];
						}
					});

export { Img3 as default };

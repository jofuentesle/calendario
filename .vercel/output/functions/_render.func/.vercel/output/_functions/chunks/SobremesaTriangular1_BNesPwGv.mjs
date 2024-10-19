const Img2 = new Proxy({"src":"/_astro/Triangular_2.C01Om-j9.jpg","width":768,"height":466,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Jordi/Documents/web/calendaris/src/assets/images/mesa/SobremesaTriangular1.jpg";
							}
							
							return target[name];
						}
					});

export { Img2 as default };

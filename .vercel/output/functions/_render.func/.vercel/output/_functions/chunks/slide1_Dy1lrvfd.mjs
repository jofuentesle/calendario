const Img1 = new Proxy({"src":"/_astro/slide1.N4VG5suN.jpg","width":1800,"height":541,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/slide1.jpg";
							}
							
							return target[name];
						}
					});

export { Img1 as default };

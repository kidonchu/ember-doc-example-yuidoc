yuidoc:
	yuidoc -t node_modules/yuidoc-ember-theme -H node_modules/yuidoc-ember-theme/helpers/helpers.js -o docs
	osascript -e 'display notification "yuidoc build finished"'                                                                                                                                                                                                                                                            master ⬆ ✱
deploy:
	cd docs; git init; git remote add origin git@github.com:kidonchu/ember-doc-example-yuidoc; git co -b gh-pages; git add -A; git cmm "Docs"; git fetch; git push -f origin gh-pages

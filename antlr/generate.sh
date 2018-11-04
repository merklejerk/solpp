#!/bin/bash -e

SCRIPT_DIR=$(dirname "$0")
pushd "${SCRIPT_DIR}"
ANTLR_JAR="./antlr4.jar"
GRAMMARS=("./SolLexer.g4" "./SolParser.g4" "./ExprLexer.g4" "./ExprParser.g4")
DST="../src/antlr"
GENERATED_FILES=("${DST}/*.js" "${DST}/*.interp" "${DST}/*.tokens")

if [ ! -f "${ANTLR_JAR}" ]; then
	curl http://www.antlr.org/download/antlr-4.7.1-complete.jar -o "$ANTLR_JAR"
fi

mkdir -p "${DST}"
echo 'Removing old generated files...'
rm -f ${GENERATED_FILES[@]}
echo 'Generating new files...'
java -jar "${ANTLR_JAR}" -o "${DST}" -Dlanguage=JavaScript -visitor "${GRAMMARS[@]}"
popd

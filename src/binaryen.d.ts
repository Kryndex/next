/*

 Binaryen's C-API.

 The WebAssembly version of the compiler will be linked against Binaryen
 compiled to WebAssembly with these functions present in the binary while the
 JS version calls them on the global object.

 see: https://github.com/WebAssembly/binaryen/blob/master/src/binaryen-c.h

*/

declare function _malloc(size: usize): usize;
declare function _free(ptr: usize): void;

declare type BinaryenIndex = u32;

declare type BinaryenType = u32;

declare function _BinaryenNone(): BinaryenType;
declare function _BinaryenInt32(): BinaryenType;
declare function _BinaryenInt64(): BinaryenType;
declare function _BinaryenFloat32(): BinaryenType;
declare function _BinaryenFloat64(): BinaryenType;
declare function _BinaryenUndefined(): BinaryenType;

declare type BinaryenModuleRef = usize;

declare function _BinaryenModuleCreate(): BinaryenModuleRef;
declare function _BinaryenModuleDispose(module: BinaryenModuleRef): void;

declare type BinaryenFunctionTypeRef = usize;
declare type CString = usize;
declare type CArray<T> = usize;

declare function _BinaryenAddFunctionType(module: BinaryenModuleRef, name: CString, result: BinaryenType, paramTypes: CArray<BinaryenType>, numParams: BinaryenIndex): BinaryenFunctionTypeRef;

declare type BinaryenLiteral = CArray<u8>;

// LLVM C ABI with `out` being a buffer of 16 bytes receiving the BinaryenLiteral struct
// union value starts at offset 8 due to alignment (?)
declare function _BinaryenLiteralInt32(out: BinaryenLiteral, x: i32): void;
declare function _BinaryenLiteralInt64(out: BinaryenLiteral, x: i32, y: i32): void;
declare function _BinaryenLiteralFloat32(out: BinaryenLiteral, x: f32): void;
declare function _BinaryenLiteralFloat64(out: BinaryenLiteral, x: f64): void;
declare function _BinaryenLiteralFloat32Bits(out: BinaryenLiteral, x: i32): void;
declare function _BinaryenLiteralFloat64Bits(out: BinaryenLiteral, x: i32, y: i32): void;

declare type BinaryenOp = i32;

declare function _BinaryenClzInt32(): BinaryenOp;
declare function _BinaryenCtzInt32(): BinaryenOp;
declare function _BinaryenPopcntInt32(): BinaryenOp;
declare function _BinaryenNegFloat32(): BinaryenOp;
declare function _BinaryenAbsFloat32(): BinaryenOp;
declare function _BinaryenCeilFloat32(): BinaryenOp;
declare function _BinaryenFloorFloat32(): BinaryenOp;
declare function _BinaryenTruncFloat32(): BinaryenOp;
declare function _BinaryenNearestFloat32(): BinaryenOp;
declare function _BinaryenSqrtFloat32(): BinaryenOp;
declare function _BinaryenEqZInt32(): BinaryenOp;
declare function _BinaryenClzInt64(): BinaryenOp;
declare function _BinaryenCtzInt64(): BinaryenOp;
declare function _BinaryenPopcntInt64(): BinaryenOp;
declare function _BinaryenNegFloat64(): BinaryenOp;
declare function _BinaryenAbsFloat64(): BinaryenOp;
declare function _BinaryenCeilFloat64(): BinaryenOp;
declare function _BinaryenFloorFloat64(): BinaryenOp;
declare function _BinaryenTruncFloat64(): BinaryenOp;
declare function _BinaryenNearestFloat64(): BinaryenOp;
declare function _BinaryenSqrtFloat64(): BinaryenOp;
declare function _BinaryenEqZInt64(): BinaryenOp;
declare function _BinaryenExtendSInt32(): BinaryenOp;
declare function _BinaryenExtendUInt32(): BinaryenOp;
declare function _BinaryenWrapInt64(): BinaryenOp;
declare function _BinaryenTruncSFloat32ToInt32(): BinaryenOp;
declare function _BinaryenTruncSFloat32ToInt64(): BinaryenOp;
declare function _BinaryenTruncUFloat32ToInt32(): BinaryenOp;
declare function _BinaryenTruncUFloat32ToInt64(): BinaryenOp;
declare function _BinaryenTruncSFloat64ToInt32(): BinaryenOp;
declare function _BinaryenTruncSFloat64ToInt64(): BinaryenOp;
declare function _BinaryenTruncUFloat64ToInt32(): BinaryenOp;
declare function _BinaryenTruncUFloat64ToInt64(): BinaryenOp;
declare function _BinaryenReinterpretFloat32(): BinaryenOp;
declare function _BinaryenReinterpretFloat64(): BinaryenOp;
declare function _BinaryenConvertSInt32ToFloat32(): BinaryenOp;
declare function _BinaryenConvertSInt32ToFloat64(): BinaryenOp;
declare function _BinaryenConvertUInt32ToFloat32(): BinaryenOp;
declare function _BinaryenConvertUInt32ToFloat64(): BinaryenOp;
declare function _BinaryenConvertSInt64ToFloat32(): BinaryenOp;
declare function _BinaryenConvertSInt64ToFloat64(): BinaryenOp;
declare function _BinaryenConvertUInt64ToFloat32(): BinaryenOp;
declare function _BinaryenConvertUInt64ToFloat64(): BinaryenOp;
declare function _BinaryenPromoteFloat32(): BinaryenOp;
declare function _BinaryenDemoteFloat64(): BinaryenOp;
declare function _BinaryenReinterpretInt32(): BinaryenOp;
declare function _BinaryenReinterpretInt64(): BinaryenOp;
declare function _BinaryenAddInt32(): BinaryenOp;
declare function _BinaryenSubInt32(): BinaryenOp;
declare function _BinaryenMulInt32(): BinaryenOp;
declare function _BinaryenDivSInt32(): BinaryenOp;
declare function _BinaryenDivUInt32(): BinaryenOp;
declare function _BinaryenRemSInt32(): BinaryenOp;
declare function _BinaryenRemUInt32(): BinaryenOp;
declare function _BinaryenAndInt32(): BinaryenOp;
declare function _BinaryenOrInt32(): BinaryenOp;
declare function _BinaryenXorInt32(): BinaryenOp;
declare function _BinaryenShlInt32(): BinaryenOp;
declare function _BinaryenShrUInt32(): BinaryenOp;
declare function _BinaryenShrSInt32(): BinaryenOp;
declare function _BinaryenRotLInt32(): BinaryenOp;
declare function _BinaryenRotRInt32(): BinaryenOp;
declare function _BinaryenEqInt32(): BinaryenOp;
declare function _BinaryenNeInt32(): BinaryenOp;
declare function _BinaryenLtSInt32(): BinaryenOp;
declare function _BinaryenLtUInt32(): BinaryenOp;
declare function _BinaryenLeSInt32(): BinaryenOp;
declare function _BinaryenLeUInt32(): BinaryenOp;
declare function _BinaryenGtSInt32(): BinaryenOp;
declare function _BinaryenGtUInt32(): BinaryenOp;
declare function _BinaryenGeSInt32(): BinaryenOp;
declare function _BinaryenGeUInt32(): BinaryenOp;
declare function _BinaryenAddInt64(): BinaryenOp;
declare function _BinaryenSubInt64(): BinaryenOp;
declare function _BinaryenMulInt64(): BinaryenOp;
declare function _BinaryenDivSInt64(): BinaryenOp;
declare function _BinaryenDivUInt64(): BinaryenOp;
declare function _BinaryenRemSInt64(): BinaryenOp;
declare function _BinaryenRemUInt64(): BinaryenOp;
declare function _BinaryenAndInt64(): BinaryenOp;
declare function _BinaryenOrInt64(): BinaryenOp;
declare function _BinaryenXorInt64(): BinaryenOp;
declare function _BinaryenShlInt64(): BinaryenOp;
declare function _BinaryenShrUInt64(): BinaryenOp;
declare function _BinaryenShrSInt64(): BinaryenOp;
declare function _BinaryenRotLInt64(): BinaryenOp;
declare function _BinaryenRotRInt64(): BinaryenOp;
declare function _BinaryenEqInt64(): BinaryenOp;
declare function _BinaryenNeInt64(): BinaryenOp;
declare function _BinaryenLtSInt64(): BinaryenOp;
declare function _BinaryenLtUInt64(): BinaryenOp;
declare function _BinaryenLeSInt64(): BinaryenOp;
declare function _BinaryenLeUInt64(): BinaryenOp;
declare function _BinaryenGtSInt64(): BinaryenOp;
declare function _BinaryenGtUInt64(): BinaryenOp;
declare function _BinaryenGeSInt64(): BinaryenOp;
declare function _BinaryenGeUInt64(): BinaryenOp;
declare function _BinaryenAddFloat32(): BinaryenOp;
declare function _BinaryenSubFloat32(): BinaryenOp;
declare function _BinaryenMulFloat32(): BinaryenOp;
declare function _BinaryenDivFloat32(): BinaryenOp;
declare function _BinaryenCopySignFloat32(): BinaryenOp;
declare function _BinaryenMinFloat32(): BinaryenOp;
declare function _BinaryenMaxFloat32(): BinaryenOp;
declare function _BinaryenEqFloat32(): BinaryenOp;
declare function _BinaryenNeFloat32(): BinaryenOp;
declare function _BinaryenLtFloat32(): BinaryenOp;
declare function _BinaryenLeFloat32(): BinaryenOp;
declare function _BinaryenGtFloat32(): BinaryenOp;
declare function _BinaryenGeFloat32(): BinaryenOp;
declare function _BinaryenAddFloat64(): BinaryenOp;
declare function _BinaryenSubFloat64(): BinaryenOp;
declare function _BinaryenMulFloat64(): BinaryenOp;
declare function _BinaryenDivFloat64(): BinaryenOp;
declare function _BinaryenCopySignFloat64(): BinaryenOp;
declare function _BinaryenMinFloat64(): BinaryenOp;
declare function _BinaryenMaxFloat64(): BinaryenOp;
declare function _BinaryenEqFloat64(): BinaryenOp;
declare function _BinaryenNeFloat64(): BinaryenOp;
declare function _BinaryenLtFloat64(): BinaryenOp;
declare function _BinaryenLeFloat64(): BinaryenOp;
declare function _BinaryenGtFloat64(): BinaryenOp;
declare function _BinaryenGeFloat64(): BinaryenOp;
declare function _BinaryenPageSize(): BinaryenOp;
declare function _BinaryenCurrentMemory(): BinaryenOp;
declare function _BinaryenGrowMemory(): BinaryenOp;
declare function _BinaryenHasFeature(): BinaryenOp;

declare type BinaryenExpressionRef = usize;

declare function _BinaryenBlock(module: BinaryenModuleRef, name: CString, children: CArray<BinaryenExpressionRef>, numChildren: BinaryenIndex, type: BinaryenType): BinaryenExpressionRef;
declare function _BinaryenIf(module: BinaryenModuleRef, condition: BinaryenExpressionRef, ifTrue: BinaryenExpressionRef, ifFalse: BinaryenExpressionRef): BinaryenExpressionRef;
declare function _BinaryenLoop(module: BinaryenModuleRef, name: CString, body: BinaryenExpressionRef): BinaryenExpressionRef;
declare function _BinaryenBreak(module: BinaryenModuleRef, name: CString, condition: BinaryenExpressionRef, value: BinaryenExpressionRef): BinaryenExpressionRef;
declare function _BinaryenSwitch(module: BinaryenModuleRef, names: CArray<CString>, numNames: BinaryenIndex, defaultName: CString, condition: BinaryenExpressionRef, value: BinaryenExpressionRef): BinaryenExpressionRef;
declare function _BinaryenCall(module: BinaryenModuleRef, target: CString, operands: CArray<BinaryenExpressionRef>, numOperands: BinaryenIndex, returnType: BinaryenType): BinaryenExpressionRef;
declare function _BinaryenCallImport(module: BinaryenModuleRef, target: CString, operands: CArray<BinaryenExpressionRef>, numOperands: BinaryenIndex, returnType: BinaryenType): BinaryenExpressionRef;
declare function _BinaryenCallIndirect(module: BinaryenModuleRef, target: BinaryenExpressionRef, operands: CArray<BinaryenExpressionRef>, numOperands: BinaryenIndex, type: CString): BinaryenExpressionRef;
declare function _BinaryenGetLocal(module: BinaryenModuleRef, index: BinaryenIndex, type: BinaryenType): BinaryenExpressionRef;
declare function _BinaryenSetLocal(module: BinaryenModuleRef, index: BinaryenIndex, value: BinaryenExpressionRef): BinaryenExpressionRef;
declare function _BinaryenTeeLocal(module: BinaryenModuleRef, index: BinaryenIndex, value: BinaryenExpressionRef): BinaryenExpressionRef;
declare function _BinaryenGetGlobal(module: BinaryenModuleRef, name: CString, type: BinaryenType): BinaryenExpressionRef;
declare function _BinaryenSetGlobal(module: BinaryenModuleRef, name: CString, value: BinaryenExpressionRef): BinaryenExpressionRef;
declare function _BinaryenLoad(module: BinaryenModuleRef, bytes: u32, signed: i8, offset: u32, align: u32, type: BinaryenType, ptr: BinaryenExpressionRef): BinaryenExpressionRef;
declare function _BinaryenStore(module: BinaryenModuleRef, bytes: u32, offset: u32, align: u32, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, type: BinaryenType): BinaryenExpressionRef;
declare function _BinaryenConst(module: BinaryenModuleRef, value: BinaryenLiteral): BinaryenExpressionRef;
declare function _BinaryenUnary(module: BinaryenModuleRef, op: BinaryenOp, value: BinaryenExpressionRef): BinaryenExpressionRef;
declare function _BinaryenBinary(module: BinaryenModuleRef, op: BinaryenOp, left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
declare function _BinaryenSelect(module: BinaryenModuleRef, condition: BinaryenExpressionRef, ifTrue: BinaryenExpressionRef, ifFalse: BinaryenExpressionRef): BinaryenExpressionRef;
declare function _BinaryenDrop(module: BinaryenModuleRef, value: BinaryenExpressionRef): BinaryenExpressionRef;
declare function _BinaryenReturn(module: BinaryenModuleRef, value: BinaryenExpressionRef): BinaryenExpressionRef;
declare function _BinaryenHost(module: BinaryenModuleRef, op: BinaryenOp, name: CString | 0, operands: CArray<BinaryenExpressionRef>, numOperands: BinaryenIndex): BinaryenExpressionRef;
declare function _BinaryenNop(module: BinaryenModuleRef): BinaryenExpressionRef;
declare function _BinaryenUnreachable(module: BinaryenModuleRef): BinaryenExpressionRef;

declare function _BinaryenExpressionPrint(expr: BinaryenExpressionRef): void;

declare type BinaryenFunctionRef = usize;

declare function _BinaryenAddFunction(module: BinaryenModuleRef, name: CString, type: BinaryenFunctionTypeRef, varTypes: CArray<BinaryenType>, numVarTypes: BinaryenIndex, body: BinaryenExpressionRef): BinaryenFunctionRef;

declare type BinaryenImportRef = usize;

declare function _BinaryenAddImport(module: BinaryenModuleRef, internalName: CString, externalModuleName: CString, externalBaseName: CString, type: BinaryenFunctionTypeRef): BinaryenImportRef;
declare function _BinaryenRemoveImport(module: BinaryenModuleRef, internalName: CString): void;

declare type BinaryenExportRef = usize;

declare function _BinaryenAddExport(module: BinaryenModuleRef, internalName: CString, externalName: CString): BinaryenExportRef;
declare function _BinaryenRemoveExport(module: BinaryenModuleRef, externalName: CString): void;

declare function _BinaryenAddGlobal(module: BinaryenModuleRef, name: CString, type: BinaryenType, mutable: i8, init: BinaryenExpressionRef): BinaryenImportRef; // sic

declare function _BinaryenSetFunctionTable(module: BinaryenModuleRef, funcs: CArray<BinaryenFunctionRef>, numFuncs: BinaryenIndex): void;

declare function _BinaryenSetMemory(module: BinaryenModuleRef, initial: BinaryenIndex, maximum: BinaryenIndex, exportName: CString, segments: CArray<CArray<u8>>, segmentOffsets: CArray<BinaryenExpressionRef>, segmentSizes: CArray<BinaryenIndex>, numSegments: BinaryenIndex): void;

declare function _BinaryenSetStart(module: BinaryenModuleRef, start: BinaryenFunctionRef): void;

declare function _BinaryenModuleParse(text: CString): BinaryenModuleRef;
declare function _BinaryenModulePrint(module: BinaryenModuleRef): void;
declare function _BinaryenModulePrintAsmjs(module: BinaryenModuleRef): void;
declare function _BinaryenModuleValidate(module: BinaryenModuleRef): i32;
declare function _BinaryenModuleOptimize(module: BinaryenModuleRef): void;
declare function _BinaryenModuleAutoDrop(module: BinaryenModuleRef): void;
declare function _BinaryenModuleWrite(module: BinaryenModuleRef, output: CString, outputSize: usize): usize;
declare function _BinaryenModuleRead(input: CString, inputSize: usize): BinaryenModuleRef;
declare function _BinaryenModuleInterpret(module: BinaryenModuleRef): void;

declare type RelooperRef = usize;
declare type RelooperBlockRef = usize;

declare function _RelooperCreate(): RelooperRef;
declare function _RelooperAddBlock(relooper: RelooperRef, code: BinaryenExpressionRef): RelooperBlockRef;
declare function _RelooperAddBranch(from: RelooperBlockRef, to: RelooperBlockRef, condition: BinaryenExpressionRef, code: BinaryenExpressionRef): void;
declare function _RelooperAddBlockWithSwitch(relooper: RelooperRef, code: BinaryenExpressionRef, condition: BinaryenExpressionRef): RelooperBlockRef;
declare function _RelooperAddBranchForSwitch(from: RelooperBlockRef, to: RelooperBlockRef, indexes: CArray<BinaryenIndex>, numIndexes: BinaryenIndex, code: BinaryenExpressionRef): void;
declare function _RelooperRenderAndDispose(relooper: RelooperRef, entry: RelooperBlockRef, labelHelper: BinaryenIndex, module: BinaryenModuleRef): BinaryenExpressionRef;

declare function _BinaryenSetAPITracing(on: i32): void;

declare function _BinaryenGetFunctionTypeBySignature(module: BinaryenModuleRef, result: BinaryenType, paramTypes: CArray<BinaryenType>, numParams: BinaryenIndex): BinaryenFunctionTypeRef;

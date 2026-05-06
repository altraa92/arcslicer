function weight(x){ return 2097152 * x.network_depth + 256 * x.total_gates + 256 * x.network_size + x.preprocess_weight;}var pre_profile = { 'code':
{"source_file":"use arcis::*;\n\n#[encrypted]\npub mod arcslicer_mxe {\n    use arcis::*;\n\n    #[instruction]\n    pub fn secure_slice_engine(\n        vault_remaining: Enc<Shared, u64>, \n        buyer_request: Enc<Shared, u64>\n    ) -> Enc<Shared, u64> {\n        \n        // Temporarily bypassing the MUX gate to verify the compiler wiring\n        buyer_request\n        \n    }\n}","code":[{"code":"buyer_request","region":{"Known":[{"line":13,"column":8},{"line":13,"column":21}]}}]}
, 'instructions':
{"secure_slice_engine":{"profilees":[{"code_idx":0,"before_size_id":0,"after_size_id":0}]}}
, 'instruction_locations':
{"secure_slice_engine":{"Known":[{"line":6,"column":4},{"line":6,"column":18}]}}
};

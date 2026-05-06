use arcis::*;

#[encrypted]
pub mod arcslicer_mxe {
    use arcis::*;

    #[instruction]
    pub fn secure_slice_engine(
        vault_remaining: Enc<Shared, u64>, 
        buyer_request: Enc<Shared, u64>
    ) -> Enc<Shared, u64> {
        
        // Temporarily bypassing the MUX gate to verify the compiler wiring
        buyer_request
        
    }
}
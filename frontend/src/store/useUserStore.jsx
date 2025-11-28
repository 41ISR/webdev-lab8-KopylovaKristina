
import { persist, createJSONStorage } from 'middleware'

export const useUserStore = create()(
    persist(
        (set, get) => ({
            session: undefined,
            setSession: (session) => set({ session }),
            clearSession: () => set({ session: undefined })
        }),
        {
            name: 'user-storage',
            storage: createJSONStorage(() => localStorage),
        },
    ),
)
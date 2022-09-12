import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { EPages } from '../enums/EPages'
import { INavbarState } from '../interfaces/INavbarState'

const useNavbarStore = create<INavbarState>()(
    devtools(
        persist(
            (set) => ({
                page: EPages.HOME,
                change: (page) => set((state) => {
                    return { page: page }
                })
            }),
            {
                name: 'navbar-storage'
            }
        )
    )
)

export default useNavbarStore
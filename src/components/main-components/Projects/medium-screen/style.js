import tw from "twin.macro";

export const Wrapper = tw.div`md:block hidden m-auto px-10`

export const Container = tw.div`relative flex flex-col m-5`

export const Title = tw.h1`text-2xl text-white font-medium w-9/12 m-auto px-3`

export const ProjectList = tw.div`grid grid-cols-2 m-auto mt-10 lg:grid-cols-4`

export const Box = tw.div`border border-gray-800 rounded-md p-5 mt-2 mr-2 bg-gray-900`

export const ImageContainer = tw.div`m-auto block border rounded border-gray-800`

export const GridContainer = tw.div`flex flex-col border border-gray-800 p-5`

export const Tools = tw.div`grid grid-cols-3 text-white text-xs text-center`

export const Button = tw.button`m-auto mx-2 mt-2 focus:outline-none text-white bg-red-900 hover:bg-red-700 font-medium rounded-full text-xs px-5 py-2.5`

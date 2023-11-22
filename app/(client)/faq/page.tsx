import Accordion from "@/app/components/accordion/Accordion";

const Faq = () => {

    return (
        <div className="w-full">
            <div
                className="
                    relative 
                    pb-12 
                    pt-28"
            >
                <div
                    className="
                        container 
                        mx-auto 
                        px-4"
                >

                    <div
                        className="
                            mb-4
                            flex 
                            flex-wrap 
                            -mx-4 
                            justify-start"
                    >
                        <div
                            className="
                                px-4 
                                relative
                                 w-full 
                                 lg:w-8/12 
                                 text-left">
                            <h1
                                className="
                                    text-3xl 
                                    font-bold 
                                    mt-3 
                                    mb-1 
                                    text-gray-700"
                            >
                                FAQ
                            </h1>

                            <p
                                className="
                                mt-2 
                                mb-4 
                                text-xl 
                                leading-relaxed 
                                text-gray-500"
                            >
                                Answers on questions
                            </p>
                        </div>
                    </div>

                    <div>
                        <Accordion title="Lorem ipsum dolor sit amet">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque rem aperiam, eaque ipsa quae.
                        </Accordion>
                        <Accordion title="Lorem ipsum dolor sit amet">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque rem aperiam, eaque ipsa quae.
                        </Accordion>
                        <Accordion title="Lorem ipsum dolor sit amet">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque rem aperiam, eaque ipsa quae.
                        </Accordion>
                        <Accordion title="Lorem ipsum dolor sit amet">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque rem aperiam, eaque ipsa quae.
                        </Accordion>
                        <Accordion title="Lorem ipsum dolor sit amet">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque rem aperiam, eaque ipsa quae.
                        </Accordion>
                        <Accordion title="Lorem ipsum dolor sit amet">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque rem aperiam, eaque ipsa quae.
                        </Accordion>
                        <Accordion title="Lorem ipsum dolor sit amet">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque rem aperiam, eaque ipsa quae.
                        </Accordion>
                    </div>
                </div>
            </div></div>
    )
}


export default Faq;
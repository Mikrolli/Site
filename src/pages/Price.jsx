import React, { Fragment, useMemo, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { XIcon } from "@heroicons/react/outline";
import { FilterIcon } from "@heroicons/react/solid";
import Products from "../mocks/Products";
import PriceList from "../components/priceCard/PriceList";
import MySelect from "../UI/select/MySelect";
import MyInput from "../UI/input/MyInput";
import NotFound from "../components/notFound/NotFound";

const filters = [
  {
    id: "brand",
    name: "Бренд",
    options: [
      { value: "Ariston", label: "Ariston", checked: false },
      { value: "Hier", label: "Hier", checked: false },
      { value: "LG", label: "LG", checked: true },
      { value: "Bosh", label: "Bosh", checked: false },
      { value: "Samsung", label: "Samsung", checked: false },
      { value: "Sony", label: "Sony", checked: false },
    ],
  },
  {
    id: "category",
    name: "Категории",
    options: [
      { value: "new", label: "Холодильник", checked: false },
      { value: "sale", label: "Стиральная машина", checked: false },
      { value: "travel", label: "Сплит-системы", checked: true },
      { value: "organization", label: "Телевизор", checked: false },
      { value: "accessories", label: "Электро печь", checked: false },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Price = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [prices, setPrices] = useState(Products);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [isProductsLoading, setIsProductsLoading] = useState(false);

  //Search and Filter
  const sortedProducts = useMemo(() => {
    if (selectedSort) {
      return [...prices].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return prices;
  }, [selectedSort, prices]);

  const sortedAndSearchProducts = useMemo(() => {
    return sortedProducts.filter((prod) =>
      prod.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedProducts]);

  //Sort
  const sortProducts = (sort) => {
    setSelectedSort(sort);
  };

  //Loading
  function Loading() {
    setIsProductsLoading(true);
    setIsProductsLoading(false);
  }

  return (
    <div className="max-w-[1240px] mx-auto">
      <div className="">
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 flex z-40">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                  <div className="px-4 flex items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">
                      Фильтры
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Закрыть меню</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <AiOutlineMinus
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <AiOutlinePlus
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200 gap-2">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
              Цены
            </h1>

            <div className="flex items-center">
              <MySelect
                value={selectedSort}
                onChange={sortProducts}
                defaultValue="Сортировка"
                options={[
                  { value: "name", name: "По названию" },
                  { value: "brand", name: "По бренду" },
                ]}
              />
              <button
                type="button"
                className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FilterIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* Filters */}
              <form className="hidden lg:block">
                <MyInput
                  placeholder="Поиск..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <AiOutlineMinus
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <AiOutlinePlus
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {sortedAndSearchProducts.length ? (
                  <PriceList prices={sortedAndSearchProducts} />
                ) : (
                  <NotFound />
                )}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Price;

{
  /* Replace with your content */
}
{
  /* <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-full" /> */
}
{
  /* /End replace */
}

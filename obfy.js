// Regular expresions for IoCs

const re_domain = new RegExp("^((?!-))(xn--)?[a-z0-9][a-z0-9-_]{0,61}[a-z0-9]{0,1}\.(xn--)?([a-z0-9\-]{1,61}|[a-z0-9-]{1,30}\.[a-z]{2,})$")
const re_ipv4 = new RegExp("\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))\b")
const re_ipv6 = new RegExp("/((([a-f]|[0-9]){1,4})|:):){7}\2")
const re_url = new RegExp("(https?:\/\/)?([\da-z\.-]+\.[a-z\.]{2,6}|[\d\.]+)([\/:?=&#]{1}[\da-z\.-]+)*[\/\?]?$")
const re_md5 = new RegExp("[a-fA-F0-9]{32}")
const re_sha1 = new RegExp("[a-f0-9]{40}") 
const re_sha256 = new RegExp("[a-f0-9]{64}")

// Common file extensions list

const common_extensions = [""]